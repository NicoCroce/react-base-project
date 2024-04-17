/* eslint-disable react/no-array-index-key */
import './LanguagesTable.css';

export const LanguageTableSkeleton = () => {
  return (
    <ul className="languages-table-skeleton">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <li key={index}>
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
          </li>
        );
      })}
    </ul>
  );
};
