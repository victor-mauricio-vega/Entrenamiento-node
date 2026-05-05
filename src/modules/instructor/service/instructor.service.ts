import { PaginationDto } from "../../../common/pagination.dto";
import { AppDataSource } from "../../../config/data-source";
import { User } from "../../users/entities/user.entity";
import { CreateInstructorDto } from "../dto/createInstructor.dto";
import { Instructor } from "../entities/instructor.entity";

export class instructorService {
  private readonly instructorRepo = AppDataSource.getRepository(Instructor);
  private readonly userRepo = AppDataSource.getRepository(User);

  async findInstructor(paginationDto: PaginationDto) {
    try {
      const { page, limit } = paginationDto;
      const [instructor, total] = await this.instructorRepo.findAndCount({
        relations: ["user"],
        skip: (page - 1) * limit,
        take: limit,
      });

      const lastPage = Math.ceil(total / limit);

      if (page > lastPage && total > 0) {
        return { message: "No hay más páginas" };
      }

      const data = instructor.map((i) => ({
        id: i.id_instructor,
        nombre: i.user.name,
        correo: i.user.email,
        titulo: i.titulo,
        registro: i.user.createdAt,
      }));

      return { data, page, limit, lastPage, total };
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }
  async findOneInstructor(id: number) {
    try {
      const instructor = await this.instructorRepo.findOne({
        where: { id_instructor: id },
      });

      if (!instructor) {
        return { message: `El usuario con id no se encuentra ${id}` };
      }

      const data = {
        name: instructor.user.name,
        email: instructor.user.email,
        title: instructor.titulo,
      };

      return data;
    } catch (error) {
      throw Error(`Error en el servidor ${error}`);
    }
  }

  async CreateInstructor(dto: CreateInstructorDto) {
    try {
      const { titulo, email } = dto;
      const user = await this.userRepo.findOne({
        where: { email: email },
      });

      if (!user) {
        return { message: `usuario no encontrado` };
      }

      const instructorExist = await this.instructorRepo.findOne({
        where: { user: { id_user: user.id_user } },
        relations: ["user"],
      });

      if (instructorExist) {
        return { message: "Este usuario ya es instructor" };
      }

      const instructor = this.instructorRepo.create({
        titulo,
        user: user,
      });

      const savedInstructor = await this.instructorRepo.save(instructor);

      const data = {
        name: savedInstructor.user.name,
        email: savedInstructor.user.email,
        title: savedInstructor.titulo,
      };

      return {
        message: "Instructor creado correctamente",
        data,
      };
    } catch (error) {
      throw new Error(`Error al crear instructor: ${error}`);
    }
  }
}
