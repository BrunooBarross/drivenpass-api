import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js"

export async function postWifi(req: Request, res: Response){
    const { userId } = res.locals;
    const data = {userId, ...req.body};
    await wifiService.saveWifi(data);
    res.sendStatus(200);
}

export async function getAllWifi(req: Request, res: Response){
    const { userId } = res.locals;
    const wifi = await wifiService.getAllWifi(userId);
    res.status(200).send(wifi);
}