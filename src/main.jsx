import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { createIDBPersister } from './Utils/Indexdb';

import { router } from './Routes';

import './index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: Infinity,
      retry: 0
    }
  }
});

const persistOptions = {
  persister: createIDBPersister(),
  maxAge: Infinity
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
    >
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  </React.StrictMode>
);
