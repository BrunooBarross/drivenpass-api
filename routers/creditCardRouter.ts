import { Router } from "express";
import { insertCreditCard } from "../controllers/creditCardController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCreditCardBody } from "../middlewares/creditCardMiddleware.js";

const creditCardRouter = Router();

creditCardRouter.post('/card', validateToken, validateCreditCardBody, insertCreditCard);

export default creditCardRouter;