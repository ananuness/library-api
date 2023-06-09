// na pasta models que vamos concentrar todos os 
// nossos modelos que representam uma coleção no banco

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  publisher: { type: String, required: true },
  edition: { type: Number },
  pages: { type: Number }
});

const books = mongoose.model('books', bookSchema);

export default books;