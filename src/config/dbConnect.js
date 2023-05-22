// na pasta config e onde colocamos as configuracoes da nossa api, inclusive a conexao com o db

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.znz7yup.mongodb.net/library-api`);

const db = mongoose.connection;

export default db;