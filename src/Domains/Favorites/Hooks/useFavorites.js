import { useQuery } from '@tanstack/react-query';
import { API } from '../../../Services/API';
import { API_LANG_FAVS } from '../Services/ApiRoutes';

export const useFavorites = () =>
  useQuery({
    queryKey: ['favorites'],
    queryFn: async () => API.GET(API_LANG_FAVS),
    staleTime: 5 * 1000, // 5 segundos en milisegundos
    refetchInterval: false // Desactiva la actualización automática
  });
