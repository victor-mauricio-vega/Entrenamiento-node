import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class loginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
