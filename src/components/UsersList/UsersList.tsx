import React from 'react';
import {useDispatch} from 'react-redux';
import {usersApi} from '../../api';
import {authSlice} from '../../store/slices/auth.slice';

export default function UsersList({user, admin}: any) {
  const dispatch = useDispatch();
  const approveUser = async (updateUser: any) => {
    try {
      const {data} = await usersApi.updateUser(updateUser?.id, {...updateUser, isApproved: true}, admin?.token!);
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
    <div className="users-list">
      <div className="col-12">
        <div className="row w-100">
          <div className="col-3">
            <p className="full-name">{user?.displayName}</p>
          </div>
          <div className="col-3">
            <p className="mb-0">{user?.email}</p>
          </div>
          <div className="offset-2 col-4">
            <div className="admin-action">
              <p className="edit">Edit</p>

              {user?.id !== admin?.id && (
                <>
                  <p className="mx-2 mb-0">|</p>
                  <p className="delete" onClick={() => deleteUser(user?.id)}>
                    Delete
                  </p>
                </>
              )}
              <p className="mx-2 mb-0">|</p>
              {user?.isApproved && (
                <p className="approve" onClick={() => approveUser(user)}>
                  Approve
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
