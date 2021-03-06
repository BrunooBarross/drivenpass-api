import { CredentialInsertData } from "../repositories/credentialRepository.js";
import { decryptPassword, encryptPassword } from "../utils/cryptrDecryptrPassword.js";
import * as credentialRepository from "../repositories/credentialRepository.js"

export async function createCredential(credentialData: CredentialInsertData){
    await verifyExistTitle(credentialData.userId, credentialData.title);
    const password = encryptPassword(credentialData.password);
    credentialData.password = password;
    await credentialRepository.insertCredential(credentialData);
    
}

async function verifyExistTitle(userId: number, title: string){
    const existsTitle = await credentialRepository.findTitle(userId, title);
    if(existsTitle){
        throw { type: 'conflict', message: `The title ${title} is already in use`}
    }
}

export async function getCredentials(userId: number){
    const findCredentials = await credentialRepository.getAllCredentials(userId);
    const credentials = decryptPassword(findCredentials);
    return credentials;
}

export async function getCredentialId(id: number, userId: number){
    const findCredential = await verifyCredentialId(id, userId);
    decryptPassword([findCredential]);
    return findCredential;
}

export async function deleteCredentialId(id: number, userId: number){
    await verifyCredentialId(id, userId);
    await credentialRepository.deleteCredential(id);
}

async function verifyCredentialId(id: number, userId: number){
    const findCredential = await credentialRepository.findById(id, userId);
    if(!findCredential){
        throw { type: 'unauthorized', message: `you don't have credentials with id ${id}`}
    }
    return findCredential;
}