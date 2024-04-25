import { useMemo } from 'react';
import { useFavorites } from '../../Hooks/useFavorites';
import { useGlobalStore } from '@/Hooks/useGlobalStore';

import './FavoritesList.css';
import { FavItem } from './FavItem';

export const FavoritesList = () => {
  const { data, isLoading } = useFavorites();
  const { data: allMutationWainting } = useGlobalStore('mutationWaiting');

  const favoritesAsync = useMemo(
    () =>
      allMutationWainting &&
      allMutationWainting
        .filter((fav) => fav.path === 'favorites')
        .map((fav) => fav.body),
    [allMutationWainting]
  );

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <ul className="favorites-list">
      <FavItem dataList={data} />
      <FavItem dataList={favoritesAsync} isAsync />
    </ul>
  );
};
