/* eslint-disable react/no-array-index-key */
import { NavLink } from 'react-router-dom';
import { FRONTEND_ROUTE } from '@/Domains/Frontend/Routes';
import { BACKEND_ROUTE } from '@/Domains/Backend/Routes';
import { useGlobalStore } from '@/Hooks/useGlobalStore';
import { FAVORITES_ROUTE } from '@/Domains/Favorites/Routes';
import { syncMutationsWithServer } from '@/Utils/Persist';

import './Navbar.css';

export const Navbar = () => {
  const { data } = useGlobalStore('favorites');
  const { data: mutationsWaiting } = useGlobalStore('mutationWaiting');

  const handleSync = () => {
    // if (!mutationsWaiting) return;
    syncMutationsWithServer();
  };

  const mutationsWaitingCount = mutationsWaiting?.length || 0;
  const favsCount = data?.length || 0;
  const favoritesCount = mutationsWaitingCount + favsCount;

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
        <li>
          <NavLink to={FAVORITES_ROUTE} className="has-chip">
            <span>Favorites</span>
            <span className="chips">
              {favoritesCount && <span className="chip">{favoritesCount}</span>}
            </span>
          </NavLink>
        </li>
      </ul>
      <button type="button" onClick={handleSync}>
        Sync
      </button>
    </nav>
  );
};
