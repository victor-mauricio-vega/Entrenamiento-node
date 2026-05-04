import { Request, Response } from "express";
import { userService } from "../service/user.service";

const service = new userService();
export class userController {
  async registerUser(req: Request, res: Response) {
    try {
      const result = await service.registerUser(req.body);
      res.status(201).json(result);
    } catch (error:any) {
      res
        .status(400)
        .json({ message: `Error en el registro de usuario. ${error.message}` });
    }
  }
}
