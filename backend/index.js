import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config.js';
import router from './routes/api.js';

const app = express();

// CORS policy
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.use(express.json());
app.use('/', router);

const run = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

MONGO_URI &&
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Connected to database');
      run(); // Run the server
    })
    .catch((e) => {
      console.log('Error connecting to database: ', e);
    });
