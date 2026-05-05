import { Request, Response } from "express";
import { instructorService } from "../service/instructor.service";
import { plainToInstance } from "class-transformer";
import { PaginationDto } from "../../../common/pagination.dto";

const service = new instructorService();

export class instructorController {
  async findInstructor(req: Request, res: Response) {
    try {
      const { page, limit } = req.query as any;
      const instructor = await service.findInstructor({
        page: Number(page),
        limit: Number(limit),
      });
      res.status(200).json(instructor);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async findOneInstructor(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const instructor = await service.findOneInstructor(id);
      res.status(200).json(instructor);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async createIntructor(req: Request, res: Response) {
    try {
      const instructor = await service.CreateInstructor(req.body);
      res.status(201).json(instructor);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}
