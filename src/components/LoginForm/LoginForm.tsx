import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authSlice} from '../../store/slices/auth.slice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    data: '',
    password: '',
  });

  function handleChange(event: any) {
    const {name, value} = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(
      authSlice.actions.login({
        token: 'sasasasas',
        role: 'admin',
        id: 798,
        firstName: 'Mile',
        lastName: 'lemi',
        displayName: 'stosasas',
        email: 'a@a.com',
      })
    );
    navigate('/profile');

    return;
  }

  // function logout(event: any) {
  //   event.preventDefault();
  //   dispatch(authSlice.actions.logout());
  //   return;
  // }

  return (
    <div className="dropdown login">
      <button className="btn-login" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Login
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <form className="text-end" onSubmit={handleSubmit}>
          <div>
            <h5 className="please-login">Please Login</h5>
          </div>
          <div className="mb-4 mt-1">
            <input
              type="text"
              className="form-control"
              name="data"
              onChange={handleChange}
              value={formData.data}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Display name/email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={formData.password}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </ul>
    </div>
  );
}
