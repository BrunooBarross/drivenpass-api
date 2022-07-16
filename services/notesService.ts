import { NoteInsertData } from "../repositories/notesRepository.js";
import * as notesReposiroty from "../repositories/notesRepository.js"

export async function createNote(data: NoteInsertData){
    await checkExistenceOfNote(data.userId, data.title);
    await notesReposiroty.insertNote(data);
}

async function checkExistenceOfNote(userId: number, title: string){
    const findNote = await notesReposiroty.getNoteByTitleAndUserId(userId, title);
    if(findNote){
        throw { type: 'unauthorized', message: `you already have a note with title ${title}`}
    }
}

export async function getAllNotes(userId: number){
    const notes = await notesReposiroty.getNotes(userId);
    return notes;
}