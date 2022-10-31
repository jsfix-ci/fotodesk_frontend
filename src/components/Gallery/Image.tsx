import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {imagesApi, usersApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import { statisticSlice } from '../../store/slices/statistics.slice';
import AdminImageButtons from './AdminImageButtons';
import Tags from './Tags';

export default function Image({image, isAdmin, hasSidebar, relatedImage}: any) {
  const {user: admin} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/details/${image.id}`);
  };
  const colSize = hasSidebar ? 'col-md-4' : 'col-md-3';

  async function deleteImage(id: number) {
    try {
      await imagesApi.deleteImage(id, admin?.token!);
      dispatch(imagesSlice.actions.deleteImage(id));
      const {data: statistics} = await usersApi.getStats(admin?.token!);
      dispatch(statisticSlice.actions.setStatistics({...statistics}));
    } catch (error) {
      console.log(error);
    }
  }

  async function approveImage(id: number) {
    try {
      await imagesApi.updateImage(id, {...image, isApproved: true}, admin?.token!);
      dispatch(imagesSlice.actions.deleteImage(id));
      const {data: statistics} = await usersApi.getStats(admin?.token!);
      dispatch(statisticSlice.actions.setStatistics({...statistics}));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={colSize}>
      <div className="card">
        <img onClick={handleClick} className="card-img-none" src={image.path} alt="#" />
        <div className="card-body">
          <h4 className="text-start">{image.user?.displayName}</h4>
          <Tags tags={image.tags} />
        </div>
        {!relatedImage && isAdmin && (
          <div className="card-footer">
            <AdminImageButtons
              isAdmin={isAdmin}
              relatedImage={relatedImage}
              deleteImage={deleteImage}
              approveImage={approveImage}
              navigate={navigate}
              image={image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
