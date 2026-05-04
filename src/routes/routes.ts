import { Router } from "express";
import userRouter from "./instructor.router";
import authRouter from "./auth.router"

const router = Router();

router.use("/instructor", userRouter);
router.use("/auth", authRouter);

export default router;
