import { IsUUID, IsString, IsNumber } from "class-validator"

export class CreateActivityDto {
    @IsUUID()
    id: string
    
    @IsUUID()    
    programId: string
    
    @IsString()    
    title: string
    
    @IsString()    
    description: string
    
    @IsString()
    dayOfWeek: string
    
    @IsNumber()
    durationMinutes: number
}
