import { IsDateString, IsEnum, IsNumber, IsString } from "class-validator"

export enum Category {
    MEDITACAO = 'meditacao',
    EXERCICIO = 'exercicio',
    NUTRICAO = 'nutricao'
}

export class CreateProgramDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsEnum(Category)
    category: Category
    
    @IsNumber()
    durationWeeks: number 
}