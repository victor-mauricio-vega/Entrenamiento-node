import { Router } from "express";
import instructorRouter from "./instructor.router";
import authRouter from "./auth.router";
import userRouter from "./user.router";

const router = Router();

router.use("/instructor", instructorRouter);
router.use("/auth", authRouter, userRouter);

export default router;
