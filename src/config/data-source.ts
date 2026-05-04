import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../modules/users/entities/user.entity";
import { Instructor } from "../modules/instructor/entities/instructor.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "No definido",
  username: process.env.DB_USER || "username",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "DB",
  port: Number(process.env.DB_PORT) || 5432,
  synchronize: false,
  entities: [User, Instructor],
  migrations: ["src/migrations/*.ts"],
});
