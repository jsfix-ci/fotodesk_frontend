import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authSlice} from '../../store/slices/auth.slice';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem('token');
    dispatch(authSlice.actions.logout());
    navigate('/');
  }, [dispatch, navigate]);
  return null;
}

export default Logout;
