import React from 'react';
import thumb from '../Gallery/thumb.jpeg';
import Tags from './Tags';
export default function Gallery({isAdmin, hasSidebar}: any) {
  return (
    <div className="container">
      <div className="row m-0">
        {new Array(22).fill({thumb}).map((image) => (
          <Image thumb={image.thumb} isAdmin={isAdmin} hasSidebar={hasSidebar} />
        ))}
      </div>
    </div>
  );
}
const Image = ({thumb, isAdmin, hasSidebar}: any) => {
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';
  console.log(colSize);
  return (
    <div className={colSize}>
      <div className="card p-3 col-12 border-0 ">
        <img className="card-img-none" src={thumb} alt="Card image cap" />
        <div className="card-body border">
          <h4 className="text-dark text-start">Author Name</h4>
          <Tags />

          <div className="row mt-5">
            {isAdmin ? (
              <>
                <button type="button" className="col-5 btn bg-primary text-dark ms-2">
                  Edit
                </button>
                <button type="button" className="col-5 btn btn-danger bg-secondary text-dark ms-2 border">
                  Delete
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
