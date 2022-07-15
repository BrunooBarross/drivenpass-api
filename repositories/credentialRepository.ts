import prisma from "../database.js";
import { Credential } from "@prisma/client"; 

export type CredentialInsertData = Omit<Credential, "id" | "createdAt">;

export async function findTitle(userId: number, title: string) {
    const result = await prisma.credential.findMany({ 
        where: {
            userId: userId,
            title: {
                startsWith: title,
                mode: 'insensitive'
            }
        }
    });

    return result;
}

export async function insertCredential(credentialData: CredentialInsertData){
    await prisma.credential.create({
        data:{
            ...credentialData
        }
    });
}