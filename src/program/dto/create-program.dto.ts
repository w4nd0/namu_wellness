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
    category: Category
    
    @IsNumber()
    durationWeeks: number
    
    @IsDateString()
    createdAt: string

    @IsDateString()
    updatedAt: string
}

