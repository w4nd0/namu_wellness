import { IsString, IsNumber } from "class-validator"

export class CreateActivityDto {
    @IsNumber()
    id: number
    
    @IsNumber()    
    programId: number
    
    @IsString()    
    title: string
    
    @IsString()    
    description: string
    
    @IsString()
    dayOfWeek: string
    
    @IsNumber()
    durationMinutes: number
}
