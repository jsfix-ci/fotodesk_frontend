import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {ILinksHeader, loggedIn, loggedOut} from '../../utilities/header-links';
import LoginForm from '../LoginForm/LoginForm';

export default function Header() {
  const {user} = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  function onChange(e: any) {
    setSearchData(e.target.value);
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    const data = searchData.split(/,|\s+/).filter(Boolean).join('+');
    navigate(`/?search=${data}`);
  };

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <Link className="navbar-brand ms-3" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo02">
            {!user?.token && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                <li className="nav-item">
                  <LoginForm />
                </li>

                {loggedOut.map((item: ILinksHeader) => {
                  return (
                    <li key={item.label} className="nav-item me-3 ms-auto d-flex">
                      <Link className="nav-link active ms-auto d-flex" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {user?.token && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 g-2">
              {loggedIn.map((item: ILinksHeader) => {
                return (
                  <li key={item.label} className="nav-item me-3 ms-auto d-flex">
                    <Link className="nav-link active ms-auto d-flex" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>

      <div className="hero input-group">
        <form onSubmit={handleSearch}>
          <input
            className="form-control"
            type="text"
            placeholder="Search here..."
            aria-label="Search"
            onChange={onChange}
            value={searchData}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}
