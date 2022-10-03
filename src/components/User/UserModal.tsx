import React from 'react';
import Register from '../Register/Register';

interface IUserModal {
  showHide: (...args: any) => void;
  handleSubmit: (...args: any) => void;
  modalClosed: boolean;
}
export function UserModal({showHide, handleSubmit, modalClosed}: IUserModal) {
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'role'];
  if (modalClosed) return null;
  return (
    <div
      className="modal fade bd-example-modal-xl show"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      style={{display: 'block', paddingRight: '15px'}}
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <Register registerFields={registerFields} isAdmin={true} handleSubmit={handleSubmit} />

            <button onClick={showHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="d-flex align-items-center"></div>
        </div>
      </div>
    </div>
  );
}
