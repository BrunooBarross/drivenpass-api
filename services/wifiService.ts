import { WifiInsertData } from "../repositories/wifiRepository.js"
import * as wifirepository from "../repositories/wifiRepository.js"
import { decryptPassword, encryptPassword } from "../utils/cryptrDecryptrPassword.js"

export async function saveWifi(data: WifiInsertData){
    data.password = encryptPassword(data.password);
    await wifirepository.insertWifi(data);
}

export async function getAllWifi(userId: number){
    const wifi = await wifirepository.findAllWifi(userId);
    const decryptpasswordWifi = decryptPassword(wifi);
    return decryptpasswordWifi;
}