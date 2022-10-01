import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import UsersList from '../../components/UsersList/UsersList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

function AdminPagePendingUsers() {
  const {users, user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPendingUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(user?.token!, {isApproved: 1});
        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    getPendingUsers();
  }, [user?.token, dispatch]);

  return (
    <>
      {users?.data?.map((user) => (
        <UsersList user={user} />
      ))}
    </>
  );
}

export default AdminPagePendingUsers;
