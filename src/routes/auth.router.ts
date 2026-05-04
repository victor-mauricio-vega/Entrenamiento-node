import { Router } from "express";
import { AuthController } from "../modules/auth/controller/auth.controller";

const router = Router()
const controller = new AuthController()


router.post("/login", (req, res) => controller.loginUser(req, res))

export default router