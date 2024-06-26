import { LanguageItem } from '@/Components/LanguageItem';
import { LanguageTableSkeleton } from './LanguageTableSkeleton';
import { useFavorites } from '@/Domains/Favorites/Hooks/useFavorites';

import './LanguagesTable.css';

export const LanguagesTable = ({ languages }) => {
  const { mutation } = useFavorites();

  const handleClick = (name) => async () => {
    await mutation.mutateAsync(name);
  };

  return (
    <ul className="languages-table">
      <div className="languages-table-header">
        <span>Language</span>
        <span>Creator</span>
        <span>Date</span>
        <span>Popularity</span>
        <span>Complexity</span>
        <span>Favorite</span>
      </div>
      {languages &&
        languages.map(
          ({
            name,
            complexity,
            creationDate,
            creator,
            popularity,
            officialWeb,
            img
          }) => (
            <li key={`${name}-${creationDate}`}>
              <LanguageItem
                name={name}
                creator={creator}
                creationDate={creationDate}
                complexity={complexity}
                popularity={popularity}
                officialWeb={officialWeb}
                img={img}
                handleClick={handleClick}
              />
            </li>
          )
        )}
    </ul>
  );
};

LanguagesTable.Skeleton = LanguageTableSkeleton;
