import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({ example: 'john.doe@example.com', description: 'The username of the user' })
    @IsEmail()
    @Transform(({ value }) => value.trim())
    email: string;

    @ApiProperty({ example: 'John123*', description: 'The password of the user' })
    @IsString()
    password: string;

    @ApiProperty({ example: 'John Doe', description: 'The fullname of the user' })
    @IsString()
    fullname: string; 
}
