import express from 'express';
import { bookController } from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', bookController.listAllBooks);
router.post('/books', bookController.createBook);

export default router;