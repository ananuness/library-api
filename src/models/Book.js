// e aqui na pasta models que vamos concentrar todos os nossos modelos que representam uma coleção no banco e tudo relacionado a regra de negócio. Ja nesse arquivo, teremos o livro, o autor, a editora e de como ele está incluído no banco.

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  numPages: { type: Number }
});

// se nao tivesse com a colletion criada, ele criaria para nos
const books = mongoose.model('books', bookSchema);

export default books;