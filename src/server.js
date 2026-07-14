// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { errors } from 'celebrate';
import notesRouter from './src/routes/notesRoutes.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3030;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

app.use('/notes', notesRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use(errors());

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    message: err.message || 'Something went wrong',
  });
});

const bootstrap = async () => {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
