import { NextFunction, Request, Response } from "express";
import { credentialSchema } from "../schemas/credentialSchema.js";

export function validateCredentialData(req: Request, res: Response, next: NextFunction){
    const { error } = credentialSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}