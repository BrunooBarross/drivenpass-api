import { Card } from "@prisma/client"; 
import prisma from "../database.js";

export type CreditCardInsertData = Omit <Card, "id" | "createdAt">

export async function findTitle(title: string, userId: number){
    const result = await prisma.card.findFirst({
        where:{
            userId,
            title:{
                startsWith: title,
                mode: 'insensitive'
            }
        }
    });
    return result;
}

export async function insertCard(data: CreditCardInsertData){
    await prisma.card.create({
        data:{
            ...data
        }
    });
}

export async function getAllCards(userId: number){
    const result = await prisma.card.findMany({
        where:{
            userId
        }
    });
    return result
}

export async function getCardById(cardId: number, userId: number){
    const result = prisma.card.findFirst({
        where:{
            id: cardId,
            userId
        }
    });
    return result;
}

export async function deleteCardById(cardId){
    await prisma.card.delete({
        where:{
            id: cardId
        }
    });
}