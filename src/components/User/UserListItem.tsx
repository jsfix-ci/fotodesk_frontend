import React from 'react';
import {IUser} from '../../store/slices/auth.slice';

interface IUserListItem {
  user: IUser;
  admin: IUser;
  deleteUser: (...args: any) => void;
  approveUser: (...args: any) => void;
  editUser: (...args: any) => void;
}
export function UserListItem({user, admin, deleteUser, approveUser, editUser}: IUserListItem) {
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
              <p className="edit" onClick={() => editUser(user)}>
                Edit
              </p>

              {user?.id !== admin?.id && (
                <>
                  <p className="mx-2 mb-0">|</p>
                  <p className="delete" onClick={() => deleteUser(user?.id)}>
                    Delete
                  </p>
                </>
              )}
              <p className="mx-2 mb-0">|</p>

              <p className="approve" onClick={() => approveUser(user)}>
                {user?.isApproved ? 'Block' : 'Approve'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
