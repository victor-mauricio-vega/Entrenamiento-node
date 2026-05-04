import { Request, Response } from "express";

import { AuthService } from "../service/auth.service";

const service = new AuthService();

export class AuthController {
  async loginUser(req: Request, res: Response) {
    try {
      const ressult = await service.loginUser(req.body);
      res.status(200).json(ressult);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
