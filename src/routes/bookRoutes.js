import express from 'express';
import { bookController } from '../controllers/bookController.js';

const router = express.Router();
// quando as rotas tiverem os mesmos metodos
// organizar do mais especifico ao menos especifico
router.get('/books', bookController.findAllBooks);
router.get('/books/search', bookController.findBooksByPublisher);
router.get('/books/:id', bookController.findOneBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

export default router;