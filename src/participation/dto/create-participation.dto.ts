import { IsNumber, IsString, IsDateString, IsObject } from "class-validator"
import { Activity } from "src/activity/entities/activity.entity"

export class CreateParticipationDto {    
    @IsString()
    userName: string
    
    @IsNumber()    
    activityId: number

    @IsString()  
    completedAt: string

    @IsString()  
    notes: string
}