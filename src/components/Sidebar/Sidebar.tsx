import React from 'react';
import {Link} from 'react-router-dom';
import {userLinks, adminLinks, ILink} from '../../utilities/nav-links';

export default function SideBar({isAdmin}: any) {
  return (
    <div className="sidebar">
      <aside>
        <div className="toogle">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div id="navbar-nav-alt-markup">
            <div className="link">
              {isAdmin
                ? adminLinks.map((adminLink: ILink) => <Link to={adminLink.path}>{adminLink.label}</Link>)
                : userLinks.map((userLink: ILink) => <Link to={userLink.path}>{userLink.label}</Link>)}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
