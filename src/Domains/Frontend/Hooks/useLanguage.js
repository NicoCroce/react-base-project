import { useQuery } from '@tanstack/react-query';
import { API } from '../../../Services/API';
import { API_LANG_FRONT } from '../Services/ApiRoutes';

export const useLanguage = () =>
  useQuery({
    queryKey: ['frontLanguages'],
    queryFn: async () => API(API_LANG_FRONT),
    staleTime: 5 * 1000, // 5 minutos en milisegundos
    refetchInterval: false // Desactiva la actualización automática
  });
