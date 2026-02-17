import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "../dto/create-program.dto"

@Entity('programs')
export class Program {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        type: 'enum',
        enum: Category 
    })
    category: Category
    
    @Column({name: 'duration_weeks'})
    durationWeeks: number
    
    @Column({name: 'created_at'})
    createdAt: string

    @Column({name: 'updated_at'})
    updatedAt: string
}
