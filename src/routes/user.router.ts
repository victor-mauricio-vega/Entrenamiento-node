import { Router } from "express";
import { userController } from "../modules/users/controller/user.controller";
import { ValidateDto } from "../middlewares/validateDto.middleware";
import { registerUserDto } from "../modules/users/dto/registerUser.dto";

const router = Router();
const controller = new userController();
router.post("/register", ValidateDto(registerUserDto), (req, res) =>
  controller.registerUser(req, res),
);

export default router;
