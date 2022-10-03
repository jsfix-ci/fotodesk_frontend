import React from 'react';
import {useDispatch} from 'react-redux';
import {usersApi} from '../../api';
import {authSlice, IUser} from '../../store/slices/auth.slice';
import {UserListItem} from './UserListItem';

interface IUserList {
  admin: IUser;
  users: IUser[];
}
export default function UserList({users, admin}: IUserList) {
  const dispatch = useDispatch();
  const approveUser = async (updateUser: any) => {
    try {
      const {data} = await usersApi.updateUser(updateUser?.id, {...updateUser, isApproved: !updateUser.isApproved}, admin?.token!);
      dispatch(authSlice.actions.updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      await usersApi.deleteUser(userId, admin?.token!);
      dispatch(authSlice.actions.deleteUser(userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {users.map((user) => (
        <UserListItem user={user} admin={admin} approveUser={approveUser} deleteUser={deleteUser} />
      ))}
      ;
    </>
  );
}
