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

export async function getCreditCardById(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    const card = await creditCardService.getCreditCard(id, userId);
    res.status(200).send(card);
}