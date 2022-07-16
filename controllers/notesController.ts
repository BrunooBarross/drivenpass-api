import { Request, Response } from "express";
import * as notesService from "../services/notesService.js"

export async function createNote(req: Request, res: Response){
    const { userId } = res.locals;
    const data = {userId, ...req.body};
    await notesService.createNote(data);
    res.sendStatus(201);
}

export async function getNotes(req: Request, res: Response){
    const { userId } = res.locals;
    const notes = await notesService.getAllNotes(userId);
    res.status(200).send(notes);
}

export async function getNoteId(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    const note = await notesService.getNote(id, userId);
    res.status(200).send(note);
}

export async function deleteNote(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    await notesService.deleteNote(id, userId);
    res.sendStatus(200);
}