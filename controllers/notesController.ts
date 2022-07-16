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