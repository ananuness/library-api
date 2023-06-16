import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// evento de erro para vermos o que pode ter dado
// errado. Fazemos um 'bind', ligando os logs do
// mongo com o terminal para visualizarmos
db.on('error', console.log.bind(console, '⛔️ Connection error'));

// evento de abertura da conexão apenas uma vez
// (.once) para tentar abrir a conexão chamamos
db.once('open', () => console.log('✅ Connected to database successfully'));

const app = express();

app.use(express.json());
routes(app);

export default app;