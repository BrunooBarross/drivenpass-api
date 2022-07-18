import { Router } from "express";
import { getAllWifi, postWifi } from "../controllers/wifiController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateWifiData } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post('/wifi', validateToken, validateWifiData, postWifi);
wifiRouter.get('/wifi', validateToken, getAllWifi);

export default wifiRouter;