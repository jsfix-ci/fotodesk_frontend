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
        <button className="btn btn-sm btn-secondary me-2" onClick={() => editUser(user)}>
          Edit
        </button>
        {user?.id !== admin?.id && (
          <button className="btn btn-sm btn-danger me-2" onClick={() => deleteUser(user?.id)}>
            Delete
          </button>
        )}
        <button className="btn btn-sm btn-success" onClick={() => approveUser(user)}>
          {user?.isApproved ? 'Block' : 'Approve'}
        </button>
      </td>
    </tr>
  );
}
