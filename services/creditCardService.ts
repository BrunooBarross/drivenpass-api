import { CreditCardInsertData } from "../repositories/creditCardRepository.js";
import * as creditCardRepository from "../repositories/creditCardRepository.js"
import { encryptCVC, encryptPassword } from "../utils/cryptrDecryptrPassword.js";

export async function creditCardData(data: CreditCardInsertData){
    await verifyExistTitle(data.title, data.userId);
    const encryptedPassword = encryptPassword(data.password);
    const encryptedCVC = encryptCVC(data.cvc);
    data.password = encryptedPassword;
    data.cvc = encryptedCVC;
    await creditCardRepository.insertCard(data);

}

async function verifyExistTitle(title: string, userId: number){
    const existsTitle = await creditCardRepository.findTitle(title, userId);
    if(existsTitle){
        throw { type: 'conflict', message: `The title "${title}" is already in use`}
    }
}