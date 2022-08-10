import React from 'react';

export default function CommonLayout({children}: any) {
  return (
    <>
      <div className="col-12">{children}</div>
    </>
  );
}
