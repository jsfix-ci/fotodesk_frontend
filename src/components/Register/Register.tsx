import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authApi} from '../../api';
import RegisterForm from '../../components/Register/RegisterForm';
import {authSlice} from '../../store/slices/auth.slice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'repeatPassword'];
  async function handleSubmit(payload: any) {
    try {
      const {data} = await authApi.register(payload);

      dispatch(
        authSlice.actions.login({
          ...data.user,
          token: data.token!,
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
      <RegisterForm isAdmin={true} registerFields={registerFields} handleSubmit={handleSubmit} legend={'Register'} />
    </>
  );
}
