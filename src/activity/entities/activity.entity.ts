import { Participation } from '../../participation/entities/participation.entity';
import { Program } from '../../program/entities/program.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { DayOfWeek } from '../dto/create-activity.dto';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Program)
  program: Program;

  @Column()
  @JoinColumn({ name: 'program_id' })
  programId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: DayOfWeek,
  })
  dayOfWeek: DayOfWeek;

  @Column({ name: 'duration_minutes' })
  durationMinutes: number;

  @OneToMany(() => Participation, (participation) => participation.activity)
  participation: Participation;
}
