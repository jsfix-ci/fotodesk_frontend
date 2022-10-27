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
      <tr>
        <td>{user?.displayName}</td>
        <td>{user?.email}</td>
        <td>
          <a className="btn btn-sm btn-secondary me-2" onClick={() => editUser(user)}>
            Edit
          </a>
          {user?.id !== admin?.id && (
                <a className="btn btn-sm btn-danger me-2" onClick={() => deleteUser(user?.id)}>
                  Delete
                </a>
          )}
          <a className="btn btn-sm btn-success" onClick={() => approveUser(user)}>
            {user?.isApproved ? 'Block' : 'Approve'}
          </a>
        </td>
      </tr>
  );
}
