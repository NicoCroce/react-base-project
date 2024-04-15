import { NavLink } from 'react-router-dom';
import { FRONTEND_ROUTE } from '../../Domains/Frontend/Routes';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Administrador</h2>
      <ul className="links">
        <li>
          <NavLink to={FRONTEND_ROUTE}>Productos</NavLink>
        </li>
        <li>
          <NavLink to="/sales">Ventas</NavLink>
        </li>
      </ul>
    </nav>
  );
};
