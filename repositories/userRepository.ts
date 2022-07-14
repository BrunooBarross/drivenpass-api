import prisma from "../database.js";
import { Users } from "@prisma/client"; 

export type UserInsertData = Omit<Users, "id">;

export async function insertUser(userData: UserInsertData) {
    await prisma.users.create({
        data:{
            email: userData.email,
            password: userData.password
        }
    });
}  

export async function findByEmail(email: string) {
    const result = prisma.users.findUnique({ 
        where: {
            email: email
        }
    });
    
    return result;
}