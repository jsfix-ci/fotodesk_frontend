import React, {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authApi} from '../../api';
import {authSlice} from '../../store/slices/auth.slice';
import {emailPattern, passwordPattern} from '../../utilities/helper';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  function handleChange(event: any) {
    const {name, value} = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const isSubmitDisabled = useMemo(() => {
    console.log(!emailPattern.test(formData.username));
    console.log(!passwordPattern.test(formData.password));
    return !emailPattern.test(formData.username) || !passwordPattern.test(formData.password);
  }, [formData]);

  async function handleSubmit(event: any) {
    try {
      event.preventDefault();
      const {
        data: {token},
      } = await authApi.login(formData);
      const {data: user} = await authApi.me(token);
      setFormData({username: '', password: ''});
      dispatch(
        authSlice.actions.login({
          token,
          ...user,
        })
      );
      localStorage.setItem('token', token);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
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
              name="username"
              onChange={handleChange}
              value={formData.username}
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
              placeholder="Password"
            />
          </div>

          <button type="submit" className="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </ul>
    </div>
  );
}
