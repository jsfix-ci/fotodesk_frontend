import React from 'react';

export default function UsersList({user}: any) {
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
              <p className="mx-2 mb-0">|</p>

              <p className="delete">Delete</p>
              <p className="mx-2 mb-0">|</p>
              <p className="approve">Approve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
