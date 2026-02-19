import { Injectable } from '@nestjs/common';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { UpdateParticipationDto } from './dto/update-participation.dto';
import { Repository } from 'typeorm';
import { Participation } from './entities/participation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParticipationService {
  constructor(
    @InjectRepository(Participation)
    private readonly repository: Repository<Participation>
  ){}

  create(createParticipationDto: CreateParticipationDto) {
    const participation = this.repository.create(createParticipationDto)
    return this.repository.save(participation)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
     return this.repository.findOneBy({ id })
  }

  async update(id: number, updateParticipationDto: UpdateParticipationDto) {
    const participation = await this.repository.findOneBy({ id })    
    
    if(!participation) return null

    this.repository.merge(participation, updateParticipationDto)    

    return this.repository.save(participation)
  }

  async remove(id: number) {
   const participation = await this.repository.findOneBy({ id })    
    
    if(!participation) return null

    return this.repository.remove(participation)
  }
}
