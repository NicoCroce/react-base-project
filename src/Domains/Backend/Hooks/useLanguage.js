import { useQuery } from '@tanstack/react-query';
import { API } from '../../../Services/API';
import { API_LANG_BACK } from '../Services/ApiRoutes';

export const useLanguage = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['backLanguages'],
    queryFn: () => API(API_LANG_BACK),
    initialData: []
  });

  return { data, isError, error, isLoading };
};
