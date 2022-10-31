import React from 'react';

export default function AdminImageButtons({deleteImage, navigate, image, approveImage}: any) {
  return (
    <div>
      <button type="button" className="btn btn-sm btn-primary me-2" onClick={() => navigate(`/details/edit/${image.id}`)}>
        Edit
      </button>
      <button type="button" className="btn btn-sm btn-danger me-2" onClick={() => deleteImage(image.id)}>
        Delete
      </button>
      {!image.isApproved && (
        <button type="button" className="btn btn-sm btn-success" onClick={() => approveImage(image.id)}>
          Approved
        </button>
      )}
    </div>
  );
}
<img></img>;
