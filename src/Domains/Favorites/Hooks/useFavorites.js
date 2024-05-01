import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '../../../Services/API';
import { API_LANG_FAVS } from '../Services/ApiRoutes';

const QUERY_KEY = 'favorites';

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const getFavorites = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      // save the data before return the response.
      const data = queryClient.getQueryData([QUERY_KEY]);
      try {
        // run fetch
        const res = await API.GET(API_LANG_FAVS);
        return res;
      } catch (error) {
        // if fetch return error, resotore saved data.
        return data;
      }
    },
    gcTime: Infinity,
    staleTime: 1000
  });

  const mutation = useMutation({
    // run the mutation, in this example is a method "PUT"
    mutationFn: (newFav) =>
      API.PUT(API_LANG_FAVS, {
        body: [newFav]
      }),
    onMutate: async (newFav) => {
      // Cuando se ejecuta cancelo el get a la query en este caso de 'favorites'.
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY] });
      // Guardo el estado actual para preservar los datos en caso de error.
      const preservedState = queryClient.getQueryData([QUERY_KEY]);

      // Agrego de forma manual para que sea optimista.
      queryClient.setQueryData([QUERY_KEY], (prevState) => [
        ...(prevState || []),
        newFav
      ]);

      // Gauardo el estado anterior en el context para poder recuperarlo en caso de error.
      return { preservedState };
    },
    onError: (err, variables, context) => {
      // Seteo de forma manual para revertir el caso optimista en caso de error.
      queryClient.setQueryData([QUERY_KEY], context.preservedState);
    },
    onSuccess: () => {
      // Si todo se ejecuta de forma correcta, fuerzo la actualización de la cache.
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    }
  });

  return { ...getFavorites, mutation };
};
