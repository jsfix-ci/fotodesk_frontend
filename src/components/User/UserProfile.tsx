import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {userProfileFields} from '../../utilities/helper';

function UserProfile() {
  const {user} = useSelector((state: RootState) => state.auth);

  const filteredUserProfile = useMemo(() => {
    return Object.entries(user).reduce((acc, [key, val]) => {
      if (userProfileFields[key]) return {...acc, [userProfileFields[key]]: val};
      return {...acc};
    }, {});
  }, [user]);

  return (
    <div>
      {Object.entries(filteredUserProfile).map(([key, value]) => (
        <p key={key}>
          <>
            <b>{key}:</b> {value}
          </>
        </p>
      ))}
    </div>
  );
}

export default UserProfile;
