import { CreditCardInsertData } from "../repositories/creditCardRepository.js";
import * as creditCardRepository from "../repositories/creditCardRepository.js"
import { decryptCVC, decryptPassword, encryptCVC, encryptPassword } from "../utils/cryptrDecryptrPassword.js";

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

export async function getAllCreditCards(userId: number){
    const cards = await creditCardRepository.getAllCards(userId);
    const decryptedPassword = decryptPassword(cards);
    const decryptedCards = decryptCVC(decryptedPassword);
    return decryptedCards;
}

export async function getCreditCard(cardId: number, userId: number){
    const card = await checkExistenceCardById(cardId, userId);
    const decryptedPassword = decryptPassword([card]);
    const decryptedCard = decryptCVC(decryptedPassword);
    return decryptedCard;
}

export async function deleteCrediteCard(cardId: number, userId: number){
    await checkExistenceCardById(cardId, userId);
    await creditCardRepository.deleteCardById(cardId);
}

async function checkExistenceCardById(cardId: number, userId: number){
    const existsCard = await creditCardRepository.getCardById(cardId, userId);
    if(!existsCard){
        throw { type: 'not_Found', message: `User does not have cards with the id ${cardId}`}
    }
    return existsCard;
}