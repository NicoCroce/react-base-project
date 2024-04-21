import { fileURLToPath } from 'url';
import { dirname } from 'path';
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
export const __dirname = dirname(__filename);
export const fileFavs = `${__dirname}/Data/favorites.json`;
