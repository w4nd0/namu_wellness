import { IsNumber, IsString, IsDateString, IsObject } from "class-validator"
import { Activity } from "src/activity/entities/activity.entity"

export class CreateParticipationDto {
    @IsNumber()
    id: number
    
    @IsString()
    userName: string
    
    @IsObject()    
    activity: Activity

    @IsDateString()  
    completedAt: string

    @IsString()  
    notes: string
}