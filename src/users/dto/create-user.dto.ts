import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Perez' })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ description: 'Email del usuario', example: 'carlitos@carlitos.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6) // minimum length of 6 chars per password
    @ApiProperty({ description: 'Contraseña del usuario', example: 'password123' })
    password: string; // unsigned password
}
