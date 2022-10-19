import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import Tags from './Tags';

export default function Image({thumb, isAdmin, hasSidebar, id, tags, authorName, relatedImage}: any) {
  const {user: admin} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/details/${id}`);
  };
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';

  async function deleteImage(id: number) {
    try {
      await imagesApi.deleteImage(id, admin?.token!);
      if (relatedImage) {
        dispatch(imagesSlice.actions.deleteRelatedImage(id));
      } else {
        dispatch(imagesSlice.actions.deleteImage(id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={colSize}>
      <div className="card p-3 col-12 border-0 ">
        <img onClick={handleClick} className="card-img-none" src={thumb} alt="#" />
        <div className="card-body border">
          <h4 className="text-dark text-start">{authorName}</h4>
          <Tags tags={tags} />

          <div className="row justify-content-between m-0 mt-5">
            {!relatedImage && isAdmin ? (
              <>
                <button type="button" className="col-5 btn btn-primary" onClick={() => navigate(`/details/edit/${id}`)}>
                  Edit
                </button>
                <button type="button" className="col-5 btn btn-danger bg-secondary border" onClick={() => deleteImage(id)}>
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
