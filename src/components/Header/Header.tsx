import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import HeaderLinks from './HeaderLinks';

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
            <img src={'/images/logo.png'} alt={'Fotodesk'} />
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
            <HeaderLinks user={user} />
          </div>
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
