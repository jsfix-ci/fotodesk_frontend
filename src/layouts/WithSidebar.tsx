import React from 'react';
import SideBar from '../components/Sidebar/Sidebar';

export default function WithSideBarLayout({children}: any) {
  return (
    <>
      <div className="col-2">
        <SideBar isAdmin={true} />
      </div>
      <div className="col-10">{children}</div>
    </>
  );
}
