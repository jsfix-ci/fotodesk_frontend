import React from 'react';

export default function AdminButtons({isAdmin, relatedImage, deleteImage, navigate, id}: any) {
  return (
    <div className="row justify-content-between m-0 mt-5">
      {!relatedImage && isAdmin ? (
        <>
          <button type="button" className="col-5 btn btn-primary" onClick={() => navigate(`/details/edit/${id}`)}>
            Edit
          </button>
          <button type="button" className="col-5 btn btn-danger bg-secondary border" onClick={() => deleteImage(id)}>
            Delete
          </button>
          <button type="button" className="col-5 btn btn-danger bg-secondary text-dark ms-5  mt-3 border">
            Approved
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
