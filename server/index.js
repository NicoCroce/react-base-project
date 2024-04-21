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

let favs = null;

try {
  const data = fs.readFileSync(fileFavs, 'utf8');
  console.log(data);
  favs = JSON.parse(data);
} catch (err) {
  console.error(err);
}

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
  }, 2000);
});

app.get('/language/:type', (req, res) => {
  const language =
    req.params.type === 'frontend' ? frontLanguages : backLanguages;
  res.status(200).send(language);
});

app
  .route('/favorites')
  .get((req, res) => {
    res.status(200).send(favs);
  })
  .put((req, res) => {
    const updateFavs = JSON.stringify([...favs, ...req.body]);
    fs.writeFileSync(fileFavs, updateFavs);

    res.status(200).send(updateFavs);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
