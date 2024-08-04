import express from 'express';
import { PORT } from './config.js';

const app = express();

// ROUTEs
app.get('/', (req, res) => {
  res.send('Bookstore API!');
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
