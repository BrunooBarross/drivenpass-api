import { NextFunction, Request, Response } from "express";
import { cardSchema } from "../schemas/creditCardSchema.js";

export function validateCreditCardBody(req: Request, res: Response, next: NextFunction){
    const { error } = cardSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}