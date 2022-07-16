import prisma from "../database.js";
import { Note } from "@prisma/client"; 

export type NoteInsertData = Omit<Note, "id" | "createdAt">;

export async function getNoteByTitleAndUserId(userId: number, title: string){
    const result = await prisma.note.findFirst({
        where:{
            userId,
            title: {
                startsWith: title,
                mode: 'insensitive'
            }
        }
    });

    return result;
}

export async function insertNote(data: NoteInsertData){
    await prisma.note.create({
        data: {
            ...data
        }
    });
}

export async function getNotes(userId: number){
    const result = await prisma.note.findMany({
        where:{
            userId
        }
    });
    return result;
}

export async function findById(noteId: number, userId: number){
    const result = await prisma.note.findFirst({
        where:{
            id: noteId,
            userId
        }
    });
    return result;
}

export async function deleteNoteById(noteId: number){
    await prisma.note.delete({
        where:{
            id: noteId
        }
    });
}