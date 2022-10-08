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
    const getUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(admin.token!);

        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    admin.token && getUsers();
  }, [dispatch, admin?.token]);

  // async function handleSubmit(payload: any) {
  //   try {
  //     await usersApi.createUser({...payload, isApproved: true}, admin?.token!);
  //     // setModalOpen(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const findUsers = async (e: any) => {
    try {
      e.preventDefault();

      const {data} = await usersApi.getUsers(admin?.token!, {});
      dispatch(authSlice.actions.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  return <UserList admin={admin} users={users.data} findUsers={findUsers} />;
}
