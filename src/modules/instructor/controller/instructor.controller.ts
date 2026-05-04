import { Request, Response } from "express";
import { instructorService } from "../service/instructor.service";

const service = new instructorService();

export class instructorController {
  async findInstructor(req: Request, res: Response) {
    try {
      const users = await service.findInstructor();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async findOneInstructor(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await service.findOneInstructor(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async createIntructor(req: Request, res: Response) {
    try {
      const result = await service.CreateInstructor(
        req.body.titulo,
        req.body.email,
      );
      res.status(201).json(result);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}
