import { Router } from "express";
import credentialRouter from "./credentialRouter.js";
import creditCardRouter from "./creditCardRouter.js";
import notesRouter from "./notesRouter.js";
import userRouter from "./userRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter);
router.use(creditCardRouter);
router.use(wifiRouter);

export default router;