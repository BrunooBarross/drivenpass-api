import { NextFunction, Request, Response } from "express";
import { signupSchema } from "../schemas/signupSchema.js";

export function validateSignUp(req: Request, res: Response, next: NextFunction){
    const { error } = signupSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}