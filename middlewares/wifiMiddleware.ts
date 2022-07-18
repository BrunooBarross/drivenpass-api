import { NextFunction, Request, Response } from "express";
import { wifiSchema } from "../schemas/wifiSchema.js";

export function validateWifiData(req: Request, res: Response, next: NextFunction){
    const { error } = wifiSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}