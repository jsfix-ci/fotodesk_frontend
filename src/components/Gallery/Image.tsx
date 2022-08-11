import React from "react";
import { useNavigate } from "react-router-dom";
import Tags from "./Tags";

export default function Image ({thumb, isAdmin, hasSidebar}: any) {
    const navigate = useNavigate()
    const handleClick = (e:MouseEvent)=>{
      e.preventDefault()
      navigate('/details/fksdfgdsjfda')
    }
    const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';
    return (
      <div className={colSize} onClick={(e:any)=>handleClick(e)}>
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

 