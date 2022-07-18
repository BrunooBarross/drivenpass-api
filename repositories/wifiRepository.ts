import prisma from "../database.js";
import { Wifi } from "@prisma/client"; 

export type WifiInsertData = Omit<Wifi, "id" | "createdAt">;

export async function insertWifi(data: WifiInsertData){
    await prisma.wifi.create({
        data:{
            ...data
        }
    });
}

export async function findAllWifi(userId: number){
    const result = await prisma.wifi.findMany({
        where:{
            userId
        }
    });
    
    return result;
}