import { AppDataSource } from "../../../config/data-source";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/createUser.dto";

export class userService {
  private readonly userRepo = AppDataSource.getRepository(User);

  async findUser() {
    try {
      const user = await this.userRepo.find();

      if (user.length === 0) {
        throw Error(`No se hay usuario en el momento`);
      }

      const data = user.map((u) => ({
        nombre: u.name,
        correo: u.email,
      }));

      return data;
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }
  async findOneUser(id: number) {
    try {
      const userExist = await this.userRepo.findOne({
        where: { id: id },
      });

      if (!userExist) {
        throw Error(`El usuario con id no se encuentra ${id}`);
      }

      return userExist;
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }

  async CreateUser(dto: CreateUserDto) {
    try {
      const userExist = await this.userRepo.findOne({
        where: { email: dto.email },
      });

      if (userExist) {
        throw Error(`El usuario ya existe`);
      }

      const newUser = this.userRepo.create(dto);
      const saveUser = await this.userRepo.save(newUser);

      return { mesage: "Usuario creado existosamente", data: saveUser };
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }
}
