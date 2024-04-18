import ReactDOM from 'react-dom/client';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { createIDBPersister } from './Utils/Indexdb';
// import { compress, decompress } from 'lz-string';

import { router } from './Routes/index';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

const persistOptions = {
  persister: createIDBPersister(),
  maxAge: Infinity
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={persistOptions}
  >
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </PersistQueryClientProvider>
);
