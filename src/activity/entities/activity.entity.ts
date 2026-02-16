import { PrimaryColumn, ForeignKey, Column } from "typeorm"

export class Activity {
    @PrimaryColumn()
    id: string
    
    //@ForeignKey()    
    //program_id: string
    
    @Column()    
    title: string
    
    @Column()    
    description: string
    
    @Column()
    day_of_week: string
    
    @Column()
    duration_minutes: number
}
