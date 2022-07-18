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

export async function getWifiById(id: number, userId: number){
    const wifi = await checkExistenceWifiById(id, userId);
    const decryptpasswordWifi = decryptPassword([wifi]);
    return decryptpasswordWifi;
}

async function checkExistenceWifiById(id: number, userId: number){
    const result = await wifirepository.findById(id, userId);
    if(!result){
        throw { type: 'not_Found', message: `User does not have wifi with the id ${id}`}
    }
    return result;
}