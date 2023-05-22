import books from '../models/Book.js';

const listAllBooks = async(req, res) => {
  const allBooks = await books.find({});

  res.status(200).json(allBooks);
}

const createBook = async(req, res) => {
  // const newBook = new books(req.body); ou req.body
  // await books.create(newBook)
  try {
    const newBook = new books(req.body);

    (await newBook.save()).isNew; // para salvar com o .save() faz-se necessario avisar que e um novo documento

    res.status(200).json(newBook.toJSON());
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha ao cadastrar livro.` });
  }
}

export const bookController = {
  listAllBooks,
  createBook,

}