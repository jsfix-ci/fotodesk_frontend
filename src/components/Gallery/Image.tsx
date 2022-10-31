import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import AdminImageButtons from './AdminImageButtons';
import Tags from './Tags';

export default function Image({isAdmin, hasSidebar, id, tags, authorName, relatedImage, image}: any) {
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
      <div className="card">
      <img onClick={handleClick} className="card-img-none" src={image.path} alt="#" />
        <div className="card-body">
          <h4 className="text-start">{authorName}</h4>
          <Tags tags={tags} />
        </div>
        {!relatedImage && (
          <div className="card-footer">
            <AdminImageButtons isAdmin={isAdmin} relatedImage={relatedImage} deleteImage={deleteImage} navigate={navigate} id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
