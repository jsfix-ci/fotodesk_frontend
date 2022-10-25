import React from 'react';

export default function AdminPageUploadStepTwoWatermark({hasSidebar, handleChange, isEmpty, path, id}: any) {
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';

  const warningMsg = isEmpty ? 'Please add a title' : '';

  return (
    <div className={`${colSize} mb-4`} data-is-empty={isEmpty} title={warningMsg}>
      <div className="card p-3 col-12 border-0">
        <img className="card-img-none" src={path} alt="#" />
        <div className="card-body border">
          <div className="row">
            <textarea className="w-75 m-auto mt-3" name="addTitle" onChange={handleChange} placeholder="Add title"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
