import books from '../models/Book.js';

const findAllBooks = async(req, res) => {
  try {
    const allBooks = await books.find();

    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ 
      message: `${error.message} - failed to list books.` 
    });
  }
}

const findOneBookById = async(req, res) => {
  const { id } = req.params;

  try {
    const book = await books.findById(id);

    if (!book) {
      return res.status(404).json({ 
        message: `book ${id} not found.` 
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ 
      message: `${error.message} - failed to list book ${id}.` 
    });
  }
}

const findBooksByPublisher = async(req, res) => {
  const { publisher } = req.query;

  try {
    const bookSearch = await books.find({ 
      'publisher' : { $regex : new RegExp(publisher, 'i') } 
    });

    if (!bookSearch.length) {
      return res.status(404).json({ 
        message: `books by publisher ${publisher} not found.` 
      });
    }

    return res.status(200).json(bookSearch);
  } catch (error) {
    res.status(500).json({ 
      message: `${error.message} - 
        failed to list books by publisher ${publisher}.` 
    });
  }
}

const createBook = async(req, res) => {
  // se fizer: const newBook = new books(req.body);
  // para salvar com o .save() faz-se necessário avisar que
  // é um novo documento: (await newBook.save()).isNew
  try {
    const newBook = req.body;

    if (!newBook.title) {
      return res.status(400).json({ 
        message: `title field is required` 
      });
    }

    if (!newBook.author) {
      return res.status(400).json({ 
        message: `author field is required` 
      });
    }

    if (!newBook.isbn) {
      return res.status(400).json({ 
        message: `isbn field is required` 
      });
    }

    if (!newBook.pubisher) {
      return res.status(400).json({ 
        message: `publisher field is required` 
      });
    }

    const createdBook = await books.create(newBook);
    
    return res.status(200).json(createdBook);
  } catch (error) {
    return res.status(500).json({ 
      message: `${error.message} - failed to register book.` 
    });
  }
}

const updateBook = async(req, res) => {
  const { id } = req.params;

  try {
    const book = req.body;
    const bookFound = await books.findById(id);

    if (!bookFound) {
      return res.status(404).json({ message: `book ${id} not found.`});
    }
    
    if (book._id && book._id !== id) {
      return res.status(400).json({ 
        message: `path id and body id are in conflict.`
      });
    }

    const updatedBook = await books.findByIdAndUpdate(
      id, book, { new: true }
    );

    return res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ 
      message: `${error.message} - failed to update book ${id}.` 
    });
  }
}

const deleteBook = async(req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await books.findByIdAndDelete(id);

   if (!deletedBook) {
    return res.status(400).json({ 
      message: `book ${id} not found. Book has not been deleted.` 
    });
   }

    return res.status(200).json({ message: 'successfully deleted book' });
  } catch (error) {
    return res.status(500).json({ 
      message: `${error.message} - failed to delete book ${id}.` 
    });
  }
}

export const bookController = {
  findAllBooks,
  findOneBookById,
  findBooksByPublisher,
  createBook,
  updateBook,
  deleteBook
}