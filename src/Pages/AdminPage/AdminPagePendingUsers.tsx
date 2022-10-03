import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import UserList from '../../components/User/UserList';
import {UserSearchForm} from '../../components/User/UserSearchForm';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

function AdminPagePendingUsers() {
  const {users, user: admin} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPendingUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(admin?.token!, {isApproved: 1});
        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    getPendingUsers();
  }, [admin?.token, dispatch]);

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
