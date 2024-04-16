import { FrontendPage } from '../Pages/FrontendPage';

export const FRONTEND_ROUTE = '/frontend';
export const PRODUCTS_ROUTE_DETAIL = '/products/:id';

export const FRONTEND_ROUTER = [
  { path: FRONTEND_ROUTE, element: <FrontendPage /> }
];
