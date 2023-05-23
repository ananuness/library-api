# 📚 Biblioteca API

<p align="center">
  API de livros desenvolvida com Express e MongoDB, demonstrando
  um CRUD (Create, Read, Update e Delete) básico. 📝
</p>

## 🛠️ Pré-requisitos

- Node.js (12 >=);
- npm (Node Package Manager);
- Conhecimento básico em mongoDB e no ODM (Object Data Modeling) Mongoose;

## 📥 Instalação

1. Clone o repositório:

```bash
  git clone git@github.com:<username>/library-api.git
```

2. Navegue até a pasta do repositório:

```bash
  cd library-api
```

3. Instale as dependências:

```bash
  npm i
```

4. Crie um cluster gratuito no [MongoDB Atlas](https://www.mongodb.com/atlas/database)
para armazenar os dados exemplo do arquivo `seed.json`. Após criado,
clique em **Browse Collections**, em seguida, em **+ Create Database**,
crie os campos de acordo com o Model em `models/Book.js` do projeto e
substitua a url informada em `config/dbConnect.js` acessando o cluster,
clicando em `Connect` > `Drivers` e por fim, copiando a url gerada.


## 💻 Rodando a aplicação

Para rodar a API, insira o seguinte comando no terminal no diretório
do projeto:

```bash
  npm run dev
```

O servidor irá rodar no `http://localhost:3000` (pu na porta da variável 
de ambiente `PORT`).

## 🌐 Endpoints

- **GET /books**: Retorna todos os livros.

- **GET /books/search?publisher=(value)**: Retorna todos os livros de uma editora.

- **GET /books/:id**: Retorna um livro pelo id informado.

- **POST /books**: Cria um livro. O corpo da requisição precisa ter a seguinte estrutura:

```js
{
  "title": "<title_name>",
  "author": "<author_name>",
  "isbn": "<isbn_number>",
  "publisher": "<publisher_name>",
  "edition": 1, // opcional
  "pages": 999  // opcional
}
```

- **PUT /books/:id**: Atualiza o livro referente ao id informado. O corpo da requisição precisa ter pelo menos um campo a ser atualizado, exceto o campo `_id`:

```js
{
  "title": "<title_name>",
}
```

- **DELETE /books/:id**: Deleta o livro referente ao id informado no path da requisição.

<hr>

<p align="center">
  Feito com 💚 por
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>