import React from 'react';

export default function UsersList() {
  return (
    <div className="users-list">
      <div className="col-12">
        <p className="full-name">Full name</p>
        <p className="mb-0">Email</p>
        <div className="admin-action">
          <p className="edit">Edit</p>
          <p className="mx-2 mb-0">|</p>

          <p className="delete">Delete</p>
          <p className="mx-2 mb-0">|</p>
          <p className="approve">Approve</p>
        </div>
      </div>
    </div>
  );
}
