import { Router } from "express";
import { AuthController } from "../modules/auth/controller/auth.controller";
import { ValidateDto } from "../middlewares/validateDto.middleware";
import { loginDto } from "../modules/auth/dto/login.dto";

const router = Router();
const controller = new AuthController();

router.post("/login", ValidateDto(loginDto), (req, res) =>
  controller.loginUser(req, res),
);

export default router;
