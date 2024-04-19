import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useGlobalStore = (queryKey) => {
  const queryClient = useQueryClient();

  const setQueryData = (callbackUpdate) =>
    queryClient.setQueryData([queryKey], callbackUpdate);

  const { data } = useQuery({ queryKey: [queryKey] });

  return {
    setQueryData,
    data
  };
};
