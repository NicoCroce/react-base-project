import { LanguagesTable } from '../../../../Components/LanguagesTable';
import { LanguageTableSkeleton } from '../../../../Components/LanguagesTable/LanguageTableSkeleton';
import { useLanguage } from '../../Hooks/useLanguage';

export const LangueagesFrontTable = () => {
  const { data, isLoading } = useLanguage();

  if (isLoading) return <LanguageTableSkeleton />;

  return <LanguagesTable languages={data} />;
};
