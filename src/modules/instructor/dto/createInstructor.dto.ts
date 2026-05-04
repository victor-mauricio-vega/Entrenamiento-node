import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateInstructorDto {

  @IsString({message:"Debe contener palabras"})
  @IsNotEmpty({ message: "El titulo es requerido" })
  titulo: string;

  @IsEmail({}, { message: "El correo no es válido" })
  @IsNotEmpty({ message: "El correo es requerido" })
  email: string;
}
