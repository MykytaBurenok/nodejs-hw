require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectMongoDB = require('./db/connectMongoDB');
const logger = require('./middleware/logger');
const notFoundHandler = require('./middleware/notFoundHandler');
const errorHandler = require('./middleware/errorHandler');
const notesRouter = require('./routes/notesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(notesRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const bootstrap = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

bootstrap();
