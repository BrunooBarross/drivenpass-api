import joi from "joi";
import { NoteInsertData } from "../repositories/notesRepository.js";

const notesSchema = joi.object<NoteInsertData>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
});

export { notesSchema };