import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

function UserProfile() {
  const {user} = useSelector((state: RootState) => state.auth);
  return (
    <div>
      {Object.entries(user).map(([key, value]) => (
        <p key={key}>
          {key} {value}
        </p>
      ))}
    </div>
  );
}

export default UserProfile;
