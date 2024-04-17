import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { FRONTEND_ROUTER } from '@/Domains/Frontend/Routes';
import { BACKEND_ROUTER } from '@/Domains/Backend/Routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...FRONTEND_ROUTER, ...BACKEND_ROUTER]
  }
]);
