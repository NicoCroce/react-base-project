import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useGlobalStore = (queryKey) => {
  const queryClient = useQueryClient();

  const setQueryData = (newValue) =>
    queryClient.setQueryData([queryKey], newValue);

  const { data } = useQuery({ queryKey: [queryKey] });

  return {
    setQueryData,
    data
  };
};
