import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class registerUserDto {
  @IsString({ message: "debe contener letras" })
  @IsNotEmpty({ message: "El name es requerido" })
  name: string;

  @IsString()
  @IsNotEmpty({ message: "La identificacion es requerida" })
  identificacion: string;

  @IsEmail({}, { message: "El correo no es válido" })
  @IsNotEmpty({ message: "El correo es requerido" })
  email: string;

  @IsString()
  @IsNotEmpty({message:"La contraseña es requerida"})
  password: string;
}
