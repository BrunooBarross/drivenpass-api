import * as userRepository from "../repositories/userRepository.js"
import { UserInsertData } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export async function createUser(userData: UserInsertData) {
    const password = encryptedPassword(userData.password);
    await userRepository.insertUser({ email: userData.email, password });
}

function encryptedPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}