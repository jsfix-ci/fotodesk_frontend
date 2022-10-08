import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {usersApi} from '../../api';
import {authSlice, IUser} from '../../store/slices/auth.slice';
import {UserListItem} from './UserListItem';
// import {UserModal} from './UserModal';
import {UserSearchForm} from './UserSearchForm';

interface IUserList {
  admin: IUser;
  users: IUser[];
  findUsers: (...args: any) => void;
}
export default function UserList({users, admin, findUsers}: IUserList) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

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

  function showHide() {
    setModalOpen(!modalOpen);
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <UserSearchForm findUser={findUsers} handleSearch={handleSearch} showHide={showHide} search={search} />

          {users.map((user) => (
            <UserListItem user={user} admin={admin} approveUser={approveUser} deleteUser={deleteUser} />
          ))}
        </div>
      </div>
      {/* <UserModal handleSubmit={handleSubmit} showHide={showHide} modalClosed={!modalOpen} /> */}
    </div>
  );
}
