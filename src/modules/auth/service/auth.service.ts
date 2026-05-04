import { AppDataSource } from "../../../config/data-source";
import { User } from "../../users/entities/user.entity";
import { loginDto } from "../dto/login.dto";
import bcrypt from "bcrypt";

export class AuthService {
  private readonly userRepo = AppDataSource.getRepository(User);

  async loginUser(dto: loginDto) {
    try {
      const { email, password } = dto;

      const user = await this.userRepo.findOne({
        where: { email },
      });

      if (!user) {
        return { message: `correo o contrasena incorrecta` };
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return { message: `correo o contrasena incorrecta` };
      }

      return { message: `Bienvenido ${user.name}` };
    } catch (error) {
      throw Error(`error en en servidor ${error}`);
    }
  }
}
