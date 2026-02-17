import { Program } from "src/program/entities/program.entity"
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"

@Entity('activities')
export class Activity {
    @PrimaryGeneratedColumn()
    id: number
    
    @OneToOne(() => Program)    
    program: Program
    
    @JoinColumn({name: 'program_id'})
    programId: number

    @Column()    
    title: string
    
    @Column()    
    description: string
    
    @Column({name: 'day_of_week'})
    dayOfWeek: string
    
    @Column({name: 'duration_minutes'})
    durationMinutes: number
}
