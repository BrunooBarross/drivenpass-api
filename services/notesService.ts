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

export async function getNote(noteId: number, userId: number){
    const note = await checkExistenceOfNoteById(noteId, userId);
    return note;
}

export async function deleteNote(noteId: number, userId: number){
    await checkExistenceOfNoteById(noteId, userId);
    await notesReposiroty.deleteNoteById(noteId);
}

async function checkExistenceOfNoteById(noteId: number, userId: number){
    const findNote = await notesReposiroty.findById(noteId, userId);
    if(!findNote){
        throw { type: 'not_Found', message: `you don't have notes with the id ${noteId}`}
    }
    return findNote;
}