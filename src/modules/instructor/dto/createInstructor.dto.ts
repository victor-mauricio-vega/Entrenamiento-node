import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateInstructorDto {
  @IsString()
  @IsNotEmpty({ message: "El name es requerido" })
  name: string;

  @IsEmail({}, { message: "El correo no es válido" })
  @IsNotEmpty({ message: "El correo es requerido" })
  email: string;

  @IsString()
  password: string;
}
