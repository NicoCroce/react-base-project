/* eslint-disable react/jsx-props-no-spreading */
import { NavLink as NavLinkRouter } from 'react-router-dom';

export const NavLink = ({ className = '', children, ...props }) => {
  const classNameCompouse = ({ isActive }) =>
    isActive ? `active ${className}` : className;

  return (
    <NavLinkRouter className={classNameCompouse} {...props}>
      {children}
    </NavLinkRouter>
  );
};
