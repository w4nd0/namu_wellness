import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('programs')
export class Program {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category: string
    
    @Column({name: 'duration_weeks'})
    durationWeeks: number
    
    @Column({name: 'created_at'})
    createdAt: string

    @Column({name: 'updated_at'})
    updatedAt: string
}
