import React from 'react';
import {IUser} from '../../store/slices/auth.slice';
import Register from '../Register/Register';

interface IUserModal {
  showHide: (...args: any) => void;
  handleSubmit: (user: IUser) => void;
  modalClosed: boolean;
  user?: any;
  legend?: string;
}
export function UserModal({showHide, handleSubmit, modalClosed, user, legend}: IUserModal) {
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'role'];
  if (modalClosed) return null;
  return (
    <div
      className="modal fade bd-example-modal-xl show"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      style={{display: 'block'}}
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content col-auto">
          <div className='modal-header align-items-start'>
            <Register registerFields={registerFields} isAdmin={true} handleSubmit={handleSubmit} initialValues={user} legend={legend} />
            <button onClick={() => showHide(user)} type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
