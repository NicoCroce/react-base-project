import { LanguageItem } from '@/Components/LanguageItem';
import './LanguagesTable.css';
import { LanguageTableSkeleton } from './LanguageTableSkeleton';

export const LanguagesTable = ({ languages }) => {
  return (
    <ul className="languages-table">
      <div className="languages-table-header">
        <span>Language</span>
        <span>Creator</span>
        <span>Date</span>
        <span>Popularity</span>
        <span>Complexity</span>
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
              />
            </li>
          )
        )}
    </ul>
  );
};

LanguagesTable.Skeleton = LanguageTableSkeleton;
