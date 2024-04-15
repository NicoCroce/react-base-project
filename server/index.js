/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import { frontLanguages } from './Data/FrontLanguages.js';
import { backLanguages } from './Data/BackLanguages.js';

const app = express();
const port = 3000;

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

// Add time to all request
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 2000);
});

app.get('/language/:type', (req, res) => {
  const language =
    req.params.type === 'frontend' ? frontLanguages : backLanguages;
  res.status(200).send(language);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
