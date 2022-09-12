import React from 'react';
import {useSelector} from 'react-redux';
import SideBar from '../components/Sidebar/Sidebar';
import {isAdmin} from '../utilities/helper';
export default function WithSideBarLayout({children}: any) {
  const {user} = useSelector((state: any) => state.auth);

  return (
    <>
      <div className="col-2">
        <SideBar isAdmin={isAdmin(user.role)} />
      </div>
      <div className="col-10">{children}</div>
    </>
  );
}

// pokupiti role iz redax store
// provjeri tip korisnika
// proslijedi taj tip na isAdmin
