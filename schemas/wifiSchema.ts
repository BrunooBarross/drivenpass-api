import joi from "joi";
import { WifiInsertData } from "../repositories/wifiRepository.js"

const wifiSchema = joi.object<WifiInsertData>({
    title: joi.string().required(),
    networkName: joi.string().required(),
    password: joi.string().required()
});

export { wifiSchema };