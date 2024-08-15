import express from 'express';
import BookController from '../controllers/BookController.js';

const booksRouter = express.Router();
const bookController = new BookController();

booksRouter.get('/', bookController.index.bind(bookController));
booksRouter.get('/:id', bookController.show.bind(bookController));
booksRouter.post('/', bookController.store.bind(bookController));
booksRouter.put('/:id', bookController.update.bind(bookController));
booksRouter.delete('/:id', bookController.destroy.bind(bookController));

export default booksRouter;
