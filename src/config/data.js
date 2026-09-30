import { createConnection } from "mysql2";
import { configDotenv } from "dotenv";
import 'dotenv/config';

let dbConnection;

export async function conectarDB() {
    if (dbConnection) {
        return dbConnection;
    }

    dbConnection = await createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'campus2023',
        password: process.env.DB_PASSWORD || 'campus2023',
        database: process.env.DB_NAME || 'desarrollo backed'
    });
    console.log('Conectado exitosamente a la base de datos gestion_gimnasio en MySQL.\n');
    return dbConnection;
}

export{dbConnection};