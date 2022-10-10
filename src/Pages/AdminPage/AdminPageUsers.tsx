import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import UserList from '../../components/User/UserList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

export default function AdminPageUsers() {
  const {users, user: admin} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    usersApi
      .getUsers(admin.token!)
      .then(({data}: any) => {
        dispatch(authSlice.actions.setUsers(data));
      })
      .catch((error) => console.log);
  }, [dispatch, admin?.token]);

  const getUsers = async (e: any, search?: any) => {
    try {
      e.preventDefault();
      const {data} = await usersApi.getUsers(admin.token!, {search});

      dispatch(authSlice.actions.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  return <UserList admin={admin} users={users.data} findUsers={getUsers} />;
}
