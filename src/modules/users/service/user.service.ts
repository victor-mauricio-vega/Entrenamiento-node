import { AppDataSource } from "../../../config/data-source";
import { registerUserDto } from "../dto/registerUser.dto";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";

export class userService {
  private readonly userRepo = AppDataSource.getRepository(User);

  async registerUser(dto: registerUserDto) {
    try {
      const { name, identificacion, email, password } = dto;

      const user = await this.userRepo.findOne({
        where: { email },
      });

      if (user) {
        return { message: "El correo ya esta en uso" };
      }

      const pass = await bcrypt.hash(password, 10);

      const newUser = this.userRepo.create({
        name,
        identificacion,
        email,
        password: pass,
      });

      const savedUser = await this.userRepo.save(newUser);

      const data = {
        name: savedUser.name,
      };

      return data;
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }
}
