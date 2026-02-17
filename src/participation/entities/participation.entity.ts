import { Activity } from "../../activity/entities/activity.entity"
import { PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"

export class Participation {
    @PrimaryGeneratedColumn()
    id: string

    @Column()    
    description: string

    @ManyToOne(() => Activity)
    activity: Activity

    @JoinColumn({name: 'activity_id'})
    activityId: string

    @Column({name: 'completed_at'})
    completedAt: string

    @Column()    
    notes: string
}
