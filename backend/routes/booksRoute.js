import express from 'express';
import BookController from '../controllers/BookController.js';

const booksRouter = express.Router();

booksRouter.get('/', new BookController().index);
booksRouter.get('/:id', new BookController().show);
booksRouter.post('/', new BookController().store);
booksRouter.put('/:id', new BookController().update);
booksRouter.delete('/:id', new BookController().destroy);

export default booksRouter;
