import { LanguagesTable } from '@/Components';
import { useLanguage } from '@/Domains/Backend/Hooks/useLanguage';

export const LanguagesBackTable = () => {
  const { data, isLoading, refetch } = useLanguage();

  if (isLoading) return <LanguagesTable.Skeleton />;

  return (
    <>
      <button type="button" onClick={() => refetch({ cancelRefetch: false })}>
        Refresh
      </button>
      <LanguagesTable languages={data} />
    </>
  );
};
