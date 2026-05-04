import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { Instructor } from "../../instructor/entities/instructor.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  name: string;

  @Column()
  identificacion: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Instructor, (instructor) => instructor.user)
  instructor: Instructor;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
