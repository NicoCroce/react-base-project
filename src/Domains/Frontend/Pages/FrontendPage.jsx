// import { Product } from '../../../Components/Product';
import { Page } from '../../../Components/Page/Page';
import { LanguagesTable } from '../Components/LanguagesTable';
import { useLanguage } from '../Hooks/useLanguage';
// import { LayoutPage } from '../../../Components/LayoutPage/LayoutPage';

export const FrontendPage = () => {
  const { languages } = useLanguage();

  return (
    <Page title="Frontend languages">
      <LanguagesTable languages={languages} />
    </Page>
  );
};
