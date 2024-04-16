import { Page } from '../../../Components/Page/Page';
import { LanguagesTable } from '../Components/LanguagesTable';
import { useLanguage } from '../Hooks/useLanguage';

export const BackendPage = () => {
  const { data } = useLanguage();

  return (
    <Page title="Backend languages">
      <LanguagesTable languages={data} />
    </Page>
  );
};
