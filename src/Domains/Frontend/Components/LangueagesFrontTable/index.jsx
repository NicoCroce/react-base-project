import { LanguagesTable } from '@/Components';
import { useLanguage } from '@/Domains/Frontend/Hooks/useLanguage';

export const LangueagesFrontTable = () => {
  const { data, isLoading } = useLanguage();

  if (isLoading) return <LanguagesTable.Skeleton />;

  return <LanguagesTable languages={data} />;
};
