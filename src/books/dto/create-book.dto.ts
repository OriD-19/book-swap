import { IsString, Max, Min } from "class-validator";

export class CreateBookDto {
    @IsString()
    @Min(5)
    @Max(200)
    title: string;

    @IsString()
    description: string;
}
