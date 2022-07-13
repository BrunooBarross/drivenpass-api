import { connection } from "../database.js";

export interface User {
    id: number;
    email: string;
    password?: string;
}

export type UserInsertData = Omit<User, "id">;

export async function insertUser(userData: UserInsertData) {
    const {
        email,
        password,
    } = userData;

    connection.query(`
        INSERT INTO users ("email", "password")
        VALUES ($1, $2)
    `, [email, password])
}  