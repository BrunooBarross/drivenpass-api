import { Router } from "express";
import { createCredential, getCredentialId, getCredentials } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";

const credentialRouter = Router();

credentialRouter.post('/credential', validateToken, validateCredentialData, createCredential);
credentialRouter.get('/credential', validateToken, getCredentials);
credentialRouter.get('/credential/:id', validateToken, getCredentialId);

export default credentialRouter;