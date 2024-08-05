import express from 'express';
import BookController from '../controllers/BookController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bookstore API');
});

router.get('/books', new BookController().index);
router.get('/books/:id', new BookController().show);
router.post('/books', new BookController().store);
router.put('/books/:id', new BookController().update);
router.delete('/books/:id', new BookController().destroy);

export default router;
