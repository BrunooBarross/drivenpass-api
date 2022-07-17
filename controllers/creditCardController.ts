import { Request, Response } from "express";
import * as creditCardService from "../services/creditCardService.js"

export async function insertCreditCard(req: Request, res: Response){
    const { userId } = res.locals;
    await creditCardService.creditCardData({userId, ...req.body});
    res.sendStatus(201);
}

export async function getCreditCards(req: Request, res: Response){
    const { userId } = res.locals;
    const cards = await creditCardService.getAllCreditCards(userId);
    res.status(200).send(cards);
}