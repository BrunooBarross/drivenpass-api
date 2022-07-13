import { Request, Response } from "express"
import * as userService from "../services/userService.js"

export async function createUser(req: Request, res: Response){
    const data = req.body;
    await userService.createUser(data);
    res.sendStatus(201);
}

export async function userLogin(req: Request, res: Response){
    const data = req.body;
    const setLoginToken = await userService.signin(data);
    res.status(200).send(setLoginToken)
}