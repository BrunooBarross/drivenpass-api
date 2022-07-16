import { Router } from "express";
import { createNote } from "../controllers/notesController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateNotes } from "../middlewares/notesMiddleware.js";

const notesRouter = Router();

notesRouter.post('/notes', validateToken, validateNotes, createNote);

export default notesRouter;