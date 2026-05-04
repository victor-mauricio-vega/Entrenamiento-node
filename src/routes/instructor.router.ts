import { Router } from "express";
import { instructorController } from "../modules/instructor/controller/instructor.controller";

const router = Router();

const controller = new instructorController();

router.get("/", (req, res) => controller.findInstructor(req, res));
router.get("/:id", (req, res) => controller.findOneInstructor(req, res));
router.post("/", (req, res) => controller.createIntructor(req, res));

export default router;
