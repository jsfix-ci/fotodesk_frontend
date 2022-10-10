import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {authSlice} from '../../store/slices/auth.slice';
import LoginForm from '../LoginForm/LoginForm';

export default function Header() {
  const {user} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  function onChange(e: any) {
    setSearchData(e.target.value);
  }

  function login(e: any) {
    e.preventDefault();
  }

  function logout(e: any) {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(authSlice.actions.logout());
    navigate('/');
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
                <li className="nav-item me-3 ms-auto d-flex">
                  <Link className="nav-link active ms-auto d-flex" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {user?.token && (
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 g-2'>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>

              <li className="nav-item" onClick={logout}>
                <Link className="nav-link active" to="">
                  Logout
                </Link>
              </li>

              <li className='nav-item'>
                <Link className="btn btn-outline-dark" to="/images/upload/step-1">
                    Upload
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="hero input-group">
        <form onSubmit={login}>
          <input className='form-control' type="text" placeholder="Search here..." aria-label="Search" onChange={onChange} value={searchData} />
          <button onClick={handleSearch}>Search</button>
        </form>
      </div>
    </header>
  );
}
