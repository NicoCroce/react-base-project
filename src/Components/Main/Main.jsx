import { Outlet } from 'react-router-dom';
import './Main.css';

export const Main = () => (
  <main className="main">
    <Outlet />
  </main>
);
