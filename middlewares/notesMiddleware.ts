import { NextFunction, Request, Response } from "express";
import { notesSchema } from "../schemas/notesSchema.js";


export function validateNotes(req: Request, res: Response, next: NextFunction){
    const { error } = notesSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}