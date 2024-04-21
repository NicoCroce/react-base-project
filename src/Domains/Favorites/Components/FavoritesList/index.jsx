import { uuid } from '@/Utils/uuid';
import { useFavorites } from '../../Hooks/useFavorites';

import './FavoritesList.css';

export const FavoritesList = () => {
  const { data, isLoading } = useFavorites();

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <ul className="favorites-list">
      {data &&
        data.map((fav, index) => (
          <li key={uuid()}>
            <span>{fav}</span>
            <button type="button" className="trash">
              🗑️
            </button>
          </li>
        ))}
    </ul>
  );
};
