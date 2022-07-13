import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { validateSignUp } from "../middlewares/signUpMiddleware.js";

const userRouter = Router();

userRouter.post('/signup', validateSignUp, createUser);

export default userRouter;