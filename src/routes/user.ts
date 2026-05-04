import { Router } from "express";
import { userController } from "../modules/users/controller/user.controller";

const router = Router();

const controller = new userController();

router.get("/", (req, res) => controller.findUser(req, res));
router.get("/:id", (req, res) => controller.findOneUser(req, res));
router.post("/", (req, res) => controller.createUser(req, res));

export default router;
