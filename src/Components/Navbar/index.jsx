import { NavLink } from 'react-router-dom';
import { FRONTEND_ROUTE } from '@/Domains/Frontend/Routes';
import { BACKEND_ROUTE } from '@/Domains/Backend/Routes';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Administrador</h2>
      <ul className="links">
        <li>
          <NavLink to={FRONTEND_ROUTE}>Frontend</NavLink>
        </li>
        <li>
          <NavLink to={BACKEND_ROUTE}>Backend</NavLink>
        </li>
      </ul>
    </nav>
  );
};
