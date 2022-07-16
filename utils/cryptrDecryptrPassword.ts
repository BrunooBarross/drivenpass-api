import { CredentialInsertData } from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function encryptPassword(password: string){
    const encrypt = cryptr.encrypt(password);
    return encrypt;
}

export function decryptPassword(data: Array<CredentialInsertData>){
    data.map(item =>{
        item.password= cryptr.decrypt(item.password)
    })
    return data;
}

export function encryptCVC(cvc: string){
    const encrypt = cryptr.encrypt(cvc);
    return encrypt;
}