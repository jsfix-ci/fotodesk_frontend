import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {usersApi} from '../../api';
import {authSlice, IUser} from '../../store/slices/auth.slice';
import {statisticSlice} from '../../store/slices/statistics.slice';
import {UserListItem} from './UserListItem';
import {UserModal} from './UserModal';
import {UserSearchForm} from './UserSearchForm';

interface IUserList {
  admin: IUser;
  users: IUser[];
  findUsers: (...args: any) => void;
  isPendingUsers: boolean;
}
export default function UserList({users, admin, findUsers, isPendingUsers}: IUserList) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({});
  const [legend, setLegend] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const approveUser = async (updateUser: any) => {
    try {
      const {data} = await usersApi.updateUser(updateUser?.id, {...updateUser, isApproved: !updateUser.isApproved}, admin?.token!);
      if (!!isPendingUsers) {
        dispatch(authSlice.actions.deleteUser(data.id));
      } else {
        dispatch(authSlice.actions.updateUsers(data));
      }
      const {data: statistics} = await usersApi.getStats(admin?.token!);
      dispatch(statisticSlice.actions.setStatistics({...statistics}));
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (user: any) => {
    try {
      setLegend('Edit');
      setUser(user);
      setModalOpen(true);
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

  function showHide(user: any) {
    if (user) setUser({});
    setModalOpen(!modalOpen);
    setLegend('Register');
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (user: IUser) => {
    try {
      if (user?.id) {
        const {data} = await usersApi.updateUser(user.id!, {...user, isApproved: true}, admin.token!);
        dispatch(authSlice.actions.updateUsers(data));
      } else {
        const {data} = await usersApi.createUser({...user, isApproved: true}, admin.token!);
        dispatch(authSlice.actions.addUser(data));
      }
      setModalOpen(!modalOpen);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <UserSearchForm findUser={findUsers} handleSearch={handleSearch} showHide={showHide} search={search} />

          {users.map((user) => (
            <UserListItem
              key={user.displayName}
              user={user}
              admin={admin}
              approveUser={approveUser}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          ))}
        </div>
      </div>
      <UserModal showHide={showHide} modalClosed={!modalOpen} handleSubmit={handleSubmit} user={user} legend={legend} />
    </div>
  );
}
