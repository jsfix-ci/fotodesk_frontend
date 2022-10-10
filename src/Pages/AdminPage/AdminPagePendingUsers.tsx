import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import {UserModal} from '../../components/User/UserModal';
import {UserSearchForm} from '../../components/User/UserSearchForm';
import UserList from '../../components/User/UsersList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

function AdminPagePendingUsers() {
  const {users, user: admin} = useSelector((state: RootState) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    const getPendingUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(admin?.token!, {'filter.isApproved': 0});
        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    getPendingUsers();
  }, [admin?.token, dispatch]);

  async function handleSubmit(payload: any) {
    try {
      await usersApi.createUser({...payload, isApproved: true}, admin?.token!);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const findUser = async (e: any) => {
    try {
      e.preventDefault();

      const {data} = await usersApi.getUsers(admin?.token!, {search});
      dispatch(authSlice.actions.setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  function showHide() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <UserSearchForm findUser={findUser} handleSearch={handleSearch} showHide={showHide} search={search} />

          <UserList users={users?.data} admin={admin} />
        </div>
      </div>
      <UserModal handleSubmit={handleSubmit} showHide={showHide} modalClosed={!modalOpen} />
    </div>
  );
}

export default AdminPagePendingUsers;
