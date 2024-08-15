import express from 'express';
import booksRouter from './booksRoute.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bookstore API');
});

router.use('/books', booksRouter);

export default router;
