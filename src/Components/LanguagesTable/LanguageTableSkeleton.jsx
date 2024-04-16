import './LanguagesTable.css';

export const LanguageTableSkeleton = () => {
  return (
    <div className="languages-table-skeleton">
      {Array.from({ length: 10 }).map(() => {
        return (
          <>
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
            <span className="skeleton" />
          </>
        );
      })}
    </div>
  );
};
