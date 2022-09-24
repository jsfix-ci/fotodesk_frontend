import React from 'react';
import {useNavigate} from 'react-router-dom';
import Tags from './Tags';

export default function Image({thumb, isAdmin, hasSidebar, id, tags}: any) {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/details/${id}`);
  };
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';
  return (
    <div className={colSize} onClick={handleClick}>
      <div className="card p-3 col-12 border-0 ">
        <img className="card-img-none" src={thumb} alt="#" />
        <div className="card-body border">
          <h4 className="text-dark text-start">Author Name</h4>
          <Tags tags={tags} />

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
}
