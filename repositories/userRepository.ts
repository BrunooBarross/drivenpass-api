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

export async function findByEmail(email: string) {
    const result = await connection.query(`
        SELECT * FROM users u WHERE email = $1
    `, [email]);
    return result.rows[0];
}