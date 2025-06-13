import { IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateBookDto {

    @IsString()
    author: string;

    @IsString()
    @MinLength(5)
    @MaxLength(200)
    title: string;

    @IsString()
    description: string;
}
