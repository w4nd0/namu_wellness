import { IsDateString, IsEnum, IsNumber, IsString, IsUUID } from "class-validator"

enum Category {
    MEDITACAO = 'meditação',
    EXERCICIO = 'exercício',
    NUTRICAO = 'nutrição'
}

export class CreateProgramDto {
    @IsUUID()
    id: string

    @IsString()
    name: string

    @IsString()
    description: string

    @IsEnum(Category)
    Category: Category
    
    @IsNumber()
    duration_weeks: number
    
    @IsDateString()
    created_at: string

    @IsDateString()
    updated_at: string
}

