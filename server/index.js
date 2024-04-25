/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'node:fs';
import { frontLanguages } from './Data/FrontLanguages.js';
import { backLanguages } from './Data/BackLanguages.js';
import { fileFavs } from './config.js';

const app = express();
const port = 3000;

const readFavs = () => {
  try {
    const data = fs.readFileSync(fileFavs, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return err;
  }
};

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add time to all request
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

app.get('/language/:type', (req, res) => {
  const language =
    req.params.type === 'frontend' ? frontLanguages : backLanguages;
  res.status(200).send(language);
});

app
  .route('/favorites')
  .get((req, res) => {
    res.status(200).send(readFavs());
  })
  // eslint-disable-next-line consistent-return
  .put((req, res) => {
    if (req.body[0] === 'CSS') {
      return res.status(500).send(JSON.stringify('error'));
    }

    const updateFavs = JSON.stringify([...readFavs(), ...req.body]);
    fs.writeFileSync(fileFavs, updateFavs);
    res.status(200).send(updateFavs);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
