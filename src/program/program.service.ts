import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/program.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly repository: Repository<Program>,
  ) {}

  create(createProgramDto: CreateProgramDto) {
    const program = this.repository.create(createProgramDto);
    return this.repository.save(program);
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    const program = await this.repository.findOneBy({ id });

    if (!program) return null;

    this.repository.merge(program, updateProgramDto);

    return this.repository.save(program);
  }

  async remove(id: number) {
    const program = await this.repository.findOneBy({ id });

    if (!program) return null;

    return this.repository.remove(program);
  }
}
