import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  id_instructor: number;

  @Column()
  titulo: string;

  @OneToOne(() => User, (user) => user.instructor)
  @JoinColumn()
  user: User;
}
