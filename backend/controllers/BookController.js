import { Book } from '../models/Book.js';
import Controller from './Controller.js';

export default class BookController extends Controller {
  async index(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    if (!req.body) return res.status(400).json({ error: 'No data provided' });

    try {
      const book = new Book(req.body);
      await book.validate();
      await book.save();

      res.status(201).json(book);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(402).json({ errors: error.errors });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    if (!req.body) return res.status(400).json({ error: 'No data provided' });
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!book) return res.status(404).json({ error: 'Book not found' });

      res.status(200).json(book);
    } catch (error) {}
  }

  async destroy(req, res) {
    try {
      const result = await Book.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ error: 'Book not found' });

      res.status(204).json({ message: 'Book deleted' });
    } catch (error) {}
  }
}
