import { ApiProperty } from "@nestjs/swagger";
import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateBookDto {

    @IsString()
    @ApiProperty({ description: 'Autor del libro', example: 'John Doe' })
    author: string;

    @IsString()
    @MinLength(5)
    @MaxLength(200)
    @ApiProperty({ description: 'Titulo del libro', example: 'NestJS for Beginners' })
    title: string;

    @IsString()
    @ApiProperty({ description: 'Descripción del libro', example: 'A comprehensive guide to NestJS.' })
    description: string;
}
