import { QueryObserver, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useGlobalStore = (queryKey, defaultValue = null) => {
  const [data, setData] = useState(defaultValue);
  const queryClient = useQueryClient();

  useEffect(() => {
    const dataStored = queryClient.getQueryData([queryKey]) || defaultValue;
    setData(dataStored);

    const observer = new QueryObserver(queryClient, {
      queryKey: [queryKey]
    }).subscribe((res) => {
      setData(res?.data || defaultValue);
    });
    return observer;
  }, [defaultValue, queryClient, queryKey]);

  const setQueryData = (newValue) => {
    queryClient.setQueryData(['selected'], newValue);
  };

  return {
    setQueryData,
    data
  };
};
