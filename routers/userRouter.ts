import { Router } from "express";
import { createUser, userLogin } from "../controllers/userController.js";
import { validateUserData } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post('/signup', validateUserData, createUser);
userRouter.post('/signin', validateUserData, userLogin);

export default userRouter;