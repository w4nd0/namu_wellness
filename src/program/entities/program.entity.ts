import { Column, PrimaryColumn } from "typeorm"

export class Program {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category: string
    
    @Column()
    duration_weeks: number
    
    @Column()
    created_at: string

    @Column()
    updated_at: string
}
