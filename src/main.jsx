import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
// import { compress, decompress } from 'lz-string';

import { router } from './Routes/index';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24 // 24 hours
    }
  }
});

persistQueryClient({
  queryClient,
  persister: createSyncStoragePersister({
    storage: window.localStorage,
    serialize: (data) => JSON.stringify(data),
    deserialize: (data) => JSON.parse(data)
  }),
  maxAge: Infinity
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
