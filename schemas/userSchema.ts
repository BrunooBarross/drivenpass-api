import joi from "joi";
import { UserInsertData } from "../repositories/userRepository.js";

const userSchema = joi.object<UserInsertData>({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});

export { userSchema };