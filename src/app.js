// app.js onde ficarao as rotas da aplicacao

import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// e um metodo que informa o que esta acontencendo, precisamos saber se tivemos algum erro. Entao, fazemos um "bind", ligando os logs do mongo com o terminal para visualizarmos
db.on('error', console.log.bind(console, '⛔️ Connection error'));

// para tentar abrir a conexao uma vez, chamamos o .once, com seu respectivo evento
db.once('open', () => console.log('✅ Connected to database successfully'));

const app = express();

app.use(express.json());

routes(app);

export default app;