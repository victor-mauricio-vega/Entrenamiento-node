import { Request, Response } from "express";
import { userService } from "../service/user.service";

const service = new userService();

export class userController {
  async findUser(req: Request, res: Response) {
    try {
      const users = await service.findUser();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async findOneUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await service.findOneUser(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const result = await service.CreateUser(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
