import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function encryptPassword(password: string){
    const encrypt = cryptr.encrypt(password);
    return encrypt;
}