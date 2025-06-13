import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Min(6) // minimum length of 6 chars per password
    password: string; // unsigned password
}
