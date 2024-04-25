import { useQuery } from '@tanstack/react-query';
import { API } from '../../../Services/API';
import { API_LANG_FRONT } from '../Services/ApiRoutes';

export const useLanguage = () =>
  useQuery({
    queryKey: ['frontLanguages'],
    queryFn: async () => API.GET(API_LANG_FRONT)
  });
