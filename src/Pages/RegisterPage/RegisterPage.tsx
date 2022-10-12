import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authApi} from '../../api';
import Register from '../../components/Register/Register';
import {authSlice} from '../../store/slices/auth.slice';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'repeatPassword'];
  async function handleSubmit(payload: any) {
    try {
      const {data} = await authApi.register(payload);

      dispatch(
        authSlice.actions.login({
          ...data,
        })
      );
      localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Register isAdmin={true} registerFields={registerFields} handleSubmit={handleSubmit} legend={'Register'} />
    </>
  );
}
