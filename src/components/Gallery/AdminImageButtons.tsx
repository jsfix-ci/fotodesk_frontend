import React from 'react';

export default function AdminImageButtons({isAdmin, relatedImage, deleteImage, navigate, id}: any) {
  return (
    <div>
      {!relatedImage && isAdmin ? (
        <>
          <button type="button" className="btn btn-sm btn-primary me-2" onClick={() => navigate(`/details/edit/${id}`)}>
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-danger me-2" onClick={() => deleteImage(id)}>
            Delete
          </button>
          <button type="button" className="btn btn-sm btn-success">
            Approved
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
<img></img>;
