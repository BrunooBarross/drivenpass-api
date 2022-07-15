import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware.js";

const credentialRouter = Router();

credentialRouter.post('/credential', validateToken);

export default credentialRouter;