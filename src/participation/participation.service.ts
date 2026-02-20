import { Injectable } from '@nestjs/common';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { Repository } from 'typeorm';
import { Participation } from './entities/participation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParticipationService {
  constructor(
    @InjectRepository(Participation)
    private readonly repository: Repository<Participation>,
  ) {}

  create(createParticipationDto: CreateParticipationDto) {
    const participation = this.repository.create(createParticipationDto);
    return this.repository.save(participation);
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }
}
