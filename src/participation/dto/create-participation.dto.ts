import { IsUUID, IsString } from "class-validator"

export class CreateParticipationDto {
    @IsUUID()
    id: string
    
    @IsString()
    userName: string
    
    @IsUUID()    
    activityId: string

    @IsString()  
    completedAt: string

    @IsString()  
    notes: string
}