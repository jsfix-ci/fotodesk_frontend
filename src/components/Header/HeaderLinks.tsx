import React from 'react';
import {Link} from 'react-router-dom';
import {ILinksHeader, loggedIn, loggedOut} from '../../utilities/header-links';
import LoginForm from '../LoginForm/LoginForm';

export default function HeaderLinks({user}: any) {
  const links = !user?.token ? loggedOut : loggedIn;
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
      {!user?.token && (
        <li className="nav-item">
          <LoginForm />
        </li>
      )}
      {links.map((item: ILinksHeader) => {
        return (
          <li key={item.label} className="nav-item me-3 ms-auto d-flex">
            <Link className="nav-link active ms-auto d-flex" to={item.path}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
