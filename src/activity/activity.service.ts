import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly repository: Repository<Activity>
  ){}

 create(createActivityDto: CreateActivityDto) {
    const activity = this.repository.create(createActivityDto)
    return this.repository.save(activity)
  }

  findAll(programId: number) {
    return this.repository.findBy({ programId })
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.repository.findOneBy({ id })    
    
    if(!activity) return null

    this.repository.merge(activity, updateActivityDto)    

    return this.repository.save(activity)
  }

  async remove(id: number) {
    const activity = await this.repository.findOneBy({ id })    
    
    if(!activity) return null

    return this.repository.remove(activity)
  } 

  async summary(id:number): Promise<Report> {
    const maxParticipants = 5

    const totalActivities = await this.repository
      .createQueryBuilder('activity')
      .where("activity.program = :id", {id})
      .getCount()
  
    const participations: ActiveParticipants[] =
      await this.repository
        .createQueryBuilder('activity')
        .innerJoin("activity.participation", "participation")  
        .select("participation.user_name", "user")      
        .addSelect("COUNT(*)", "totalParticipations")
        .where("activity.program = :id", {id})
        .groupBy('user')
        .orderBy('totalParticipations', 'DESC')
        .getRawMany() 
      
    return {  
      totalActivities,
      totalParticipations: participations.map(p => p.totalParticipations).reduce((acc, curr) => Number(acc) + Number(curr), 0),
      mostActiveParticipants: participations.slice(0,maxParticipants)
    }
  }
}

export type Report = {
  totalActivities: number
  totalParticipations: number
  mostActiveParticipants: ActiveParticipants[]
}

type ActiveParticipants = {
  user: string,
  totalParticipations: number
}