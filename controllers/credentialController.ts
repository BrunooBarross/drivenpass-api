import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js"

export async function createCredential(req: Request, res: Response){
    const { userId } = res.locals;
    const data = {userId, ...req.body};
    await credentialService.createCredential(data);
    res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response){
    const { userId } = res.locals;
    const credentials = await credentialService.getCredentials(userId);
    res.status(200).send(credentials);
}

export async function getCredentialId(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    const credential = await credentialService.getCredentialId(id, userId);
    res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    await credentialService.deleteCredentialId(id, userId);
    res.sendStatus(200);
}