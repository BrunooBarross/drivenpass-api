import { Request, Response } from "express";
import * as creditCardService from "../services/creditCardService.js"

export async function insertCreditCard(req: Request, res: Response){
    const { userId } = res.locals;
    await creditCardService.creditCardData({userId, ...req.body});
    res.sendStatus(201);
}