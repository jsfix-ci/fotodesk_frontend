import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import UserList from '../../components/User/UserList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

function AdminPagePendingUsers({findUser}: any) {
  const {users, user: admin} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const getPendingUsers = async (e: any, search?: any) => {
    try {
      e.preventDefault();
      const {data} = await usersApi.getUsers(admin?.token!, {'filter.isApproved': 0, search});
      dispatch(authSlice.actions.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    usersApi
      .getUsers(admin?.token!, {'filter.isApproved': 0})
      .then(({data}: any) => {
        dispatch(authSlice.actions.setUsers(data));
      })
      .catch((error) => console.log);
  }, [admin?.token, dispatch]);

  return <UserList users={users?.data} admin={admin} findUsers={getPendingUsers} isPendingUsers={true} />;
}

export default AdminPagePendingUsers;
