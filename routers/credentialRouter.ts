import { Router } from "express";
import { createCredential } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";

const credentialRouter = Router();

credentialRouter.post('/credential', validateToken, validateCredentialData, createCredential);

export default credentialRouter;