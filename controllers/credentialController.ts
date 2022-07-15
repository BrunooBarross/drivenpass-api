import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js"

export async function createCredential(req: Request, res: Response){
    const { userId} = res.locals;
    const data = {userId, ...req.body};
    await credentialService.createCredential(data);
    res.sendStatus(201);
}