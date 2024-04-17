import { useQuery } from '@tanstack/react-query';
import { API } from '@/Services/API';
import { API_LANG_BACK } from '../Services/ApiRoutes';

export const useLanguage = () =>
  useQuery({
    queryKey: ['backLanguages'],
    queryFn: () => API(API_LANG_BACK)
    // En este caso el back se ejecuta todo el tiempo.
  });
