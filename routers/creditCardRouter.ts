import { Router } from "express";
import { getCreditCards, insertCreditCard } from "../controllers/creditCardController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCreditCardBody } from "../middlewares/creditCardMiddleware.js";

const creditCardRouter = Router();

creditCardRouter.post('/card', validateToken, validateCreditCardBody, insertCreditCard);
creditCardRouter.get('/card', validateToken, getCreditCards);

export default creditCardRouter;