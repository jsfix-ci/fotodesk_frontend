import React from 'react';
import thumb from '../components/Gallery/thumb.jpeg';

export default function UploadStepTwoImage({hasSidebar, handleChange, addTags, styles, isEmpty, tag}: any) {
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';

  const warningMsg = isEmpty ? 'Please add at least one tag' : '';

  return (
    <div className={`${colSize} mb-4`} data-is-empty={isEmpty} title={warningMsg}>
      <div className="card p-3 col-12 border-0">
        <img className="card-img-none" src={thumb} alt="#" />
        <div className="card-body border">
          <h4 className="text-dark text-start">Author Name</h4>
          <div className="row">
            <textarea
              className="w-75 m-auto mt-3"
              name="addTag"
              value={addTags.addTags}
              onChange={handleChange}
              placeholder="Add tag"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
