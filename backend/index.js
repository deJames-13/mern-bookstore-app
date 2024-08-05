import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config.js';
import router from './routes/api.js';

const app = express();

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

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    run(); // Run the server
  })
  .catch((e) => {
    console.log('Error connecting to database: ', e);
  });
