import { CredentialInsertData } from "../repositories/credentialRepository.js";
import { encryptPassword } from "../utils/cryptrDecryptrPassword.js";
import * as credentialRepository from "../repositories/credentialRepository.js"

export async function createCredential(credentialData: CredentialInsertData){
    await verifyExistTitle(credentialData.userId, credentialData.title);
    const password = encryptPassword(credentialData.password);
    credentialData.password = password;
    await credentialRepository.insertCredential(credentialData);
    
}

async function verifyExistTitle(userId: number, title: string){
    const existsTitle = await credentialRepository.findTitle(userId, title);
    if(existsTitle.length>0){
        throw { type: 'conflict', message: `The title ${title} is already in use`}
    }
}