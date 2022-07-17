import { Router } from "express";
import { getCreditCardById, getCreditCards, insertCreditCard } from "../controllers/creditCardController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCreditCardBody } from "../middlewares/creditCardMiddleware.js";

const creditCardRouter = Router();

creditCardRouter.post('/card', validateToken, validateCreditCardBody, insertCreditCard);
creditCardRouter.get('/card', validateToken, getCreditCards);
creditCardRouter.get('/card/:id', validateToken, getCreditCardById);

export default creditCardRouter;