import { IsString, IsNumber, IsEnum } from "class-validator"

export enum DayOfWeek {
	SEGUNDA = 'segunda',
    TERCA = 'terca',
    QUARTA = 'quarta',
    QUINTA = 'quinta',
    SEXTA = 'sexta',
    SABADO = 'sabado',
    DOMINGO = 'domingo'
}
export class CreateActivityDto {    
    @IsNumber()    
    programId: number
    
    @IsString()    
    title: string
    
    @IsString()    
    description: string
    
    @IsEnum(DayOfWeek)
    dayOfWeek: DayOfWeek
    
    @IsNumber()
    durationMinutes: number
}
