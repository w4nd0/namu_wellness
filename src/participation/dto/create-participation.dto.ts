import { IsNumber, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreateParticipationDto {    
    @ApiProperty()
    @IsString()
    userName: string
    
    @ApiProperty()
    @IsNumber()    
    activityId: number

    @ApiProperty()
    @IsString()  
    completedAt: string

    @ApiProperty()
    @IsString()  
    notes: string
}