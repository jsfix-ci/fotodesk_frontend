import React from 'react';
import {Link} from 'react-router-dom';
import {adminLinks, ILink, userLinks} from '../../utilities/nav-links';

export default function SideBar({isAdmin}: any) {
  return (
    <div className="sidebar col-2">
      <aside>
        <div className="toogle">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-nav-alt-markup"
            aria-controls="navbar-nav-alt-markup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div id="navbar-nav-alt-markup">
            <div className="link">
              {!isAdmin
                ? adminLinks.map((adminLink: ILink) => (
                    <Link key={adminLink.label} to={adminLink.path}>
                      {adminLink.label}
                    </Link>
                  ))
                : userLinks.map((userLink: ILink) => (
                    <Link key={userLink.path} to={userLink.path}>
                      {userLink.label}
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
