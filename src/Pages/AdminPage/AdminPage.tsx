import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersApi} from '../../api';
import UsersList from '../../components/UsersList/UsersList';
import {RootState} from '../../store';
import {authSlice} from '../../store/slices/auth.slice';

export default function AdminPage() {
  const {users, user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const {data} = await usersApi.getUsers(user.token!);

        dispatch(authSlice.actions.setUsers(data));
      } catch (error) {
        console.log(error);
      }
    };
    user.token && getUsers();
  }, [dispatch, user?.token]);

  return (
    <div className="admin">
      <div className="row">
        <div className="col-12 ">
          <div className="d-flex">
            <div className="input-group">
              <input type="text" aria-label="First name" className="form-control" placeholder="Name" />
            </div>
            <div className="input-group">
              <input type="text" aria-label="First name" className="form-control" placeholder="Email" />
            </div>

            <button className="upload" type="submit">
              Search
            </button>
            <button className="add" type="submit">
              +Add
            </button>
          </div>

          {users?.data?.map((user) => (
            <UsersList key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
