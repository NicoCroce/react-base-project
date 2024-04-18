/* eslint-disable react/no-array-index-key */
import { NavLink } from 'react-router-dom';
import { FRONTEND_ROUTE } from '@/Domains/Frontend/Routes';
import { BACKEND_ROUTE } from '@/Domains/Backend/Routes';
import { useGlobalStore } from '@/Hooks/useGlobalStore';
import './Navbar.css';

export const Navbar = () => {
  const { data } = useGlobalStore('selected');

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
      <ul
        style={{
          color: 'white',
          marginTop: '30px',
          display: 'flex',
          flexFlow: 'nowrap column',
          gap: '16px'
        }}
      >
        {data &&
          data.map((lang, index) => {
            return <li key={index}>{lang}</li>;
          })}
      </ul>
    </nav>
  );
};
