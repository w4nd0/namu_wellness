import { IsDateString, IsEnum, IsNumber, IsString } from "class-validator"

export enum Category {
    MEDITACAO = 'meditação',
    EXERCICIO = 'exercício',
    NUTRICAO = 'nutrição'
}

export class CreateProgramDto {
    @IsNumber()
    id: number

    @IsString()
    name: string

    @IsString()
    description: string

    @IsEnum(Category)
    category: Category
    
    @IsNumber()
    durationWeeks: number
    
    @IsDateString()
    createdAt: string

    @IsDateString()
    updatedAt: string
}

