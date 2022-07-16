import { Router } from "express";
import { createNote, deleteNote, getNoteId, getNotes } from "../controllers/notesController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateNotes } from "../middlewares/notesMiddleware.js";

const notesRouter = Router();

notesRouter.post('/notes', validateToken, validateNotes, createNote);
notesRouter.get('/notes', validateToken, getNotes);
notesRouter.get('/notes/:id', validateToken, getNoteId);
notesRouter.delete('/notes/:id', validateToken, deleteNote);

export default notesRouter;