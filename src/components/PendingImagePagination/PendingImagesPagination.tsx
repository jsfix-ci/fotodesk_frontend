import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

export default function PendingImagesPagination() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const switchPage = async (url: string) => {
    try {
      const params = new URLSearchParams(url.split('?')[1]);
      const obj = Object.fromEntries(params);
      const {data} = await imagesApi.getImages(obj);
      dispatch(imagesSlice.actions.setImages(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pagination d-flex justify-content-center pt-5">
        <button
          className="btn btn-outline-secondary"
          disabled={!images?.links?.previous}
          onClick={() => switchPage(images?.links?.previous!)}
        >
          Prev
        </button>
        <button className="btn btn-outline-secondary" disabled={!images?.links?.next} onClick={() => switchPage(images?.links?.next!)}>
          Next
        </button>
      </div>
      <Gallery hasSidebar={false} images={images.data} isAdmin={isAdmin(user?.role!)} />
    </>
  );
}
