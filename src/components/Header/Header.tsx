import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

export default function Header() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  function onChange(e: any) {
    setSearchData(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate(`/?keywords=${searchData}`);
  }

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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto">
                <LoginForm />
              </li>
              <li className="nav-item me-3 ms-auto">
                <Link className="nav-link active" to="/register">
                  Register
                </Link>
              </li>
            </ul>
            <Link className="text-decoration-none" to="/uploadstep1">
              <button className="btn btn-outline-dark d-none d-md-block" type="submit">
                Upload
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="hero">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search here..." aria-label="Search" onChange={onChange} value={searchData} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}
