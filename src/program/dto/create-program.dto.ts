import { IsEnum, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum Category {
  MEDITACAO = 'meditacao',
  EXERCICIO = 'exercicio',
  NUTRICAO = 'nutricao',
}

export class CreateProgramDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({ enum: Category })
  @IsEnum(Category)
  category: Category;

  @ApiProperty()
  @IsNumber()
  durationWeeks: number;
}
