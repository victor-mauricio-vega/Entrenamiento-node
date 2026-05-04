import { Router } from "express";
import { userController } from "../modules/users/controller/user.controller";

const router = Router();
const controller = new userController();
router.post("/register", (req, res) => controller.registerUser(req, res));

export default router;
