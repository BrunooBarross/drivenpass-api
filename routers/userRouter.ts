import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { validateSignUp } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post('/signup', validateSignUp, createUser);

export default userRouter;