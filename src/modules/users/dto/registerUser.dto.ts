import { IsEmail, IsString } from "class-validator";

export class registerUserDto {
  @IsString()
  name: string;

  @IsString()
  identificacion: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
