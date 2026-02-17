import { Activity } from "../../activity/entities/activity.entity"
import { PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, Entity } from "typeorm"

@Entity('participations')
export class Participation {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'user_name'})
    userName: string

    @ManyToOne(() => Activity)  
    activity: Activity

    @Column({name: 'activity_id'})
    activityId: number

    @Column({name: 'completed_at'})
    completedAt: string

    @Column()    
    notes: string
}
