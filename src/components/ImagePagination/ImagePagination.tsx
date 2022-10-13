import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

export default function Home() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  console.log(images?.links);
  const dispatch = useDispatch();
  const nextDisabled = images?.links?.next === undefined;
  const prevDisabled = images?.links?.first === undefined;
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

  console.log(images?.links?.last, images?.links?.current);

  return (
    <>
      <div className="pagination d-flex justify-content-center m-2">
        <button className="btn btn-outline-secondary" disabled={prevDisabled} onClick={() => switchPage(images?.links?.previous || '')}>
          Prev
        </button>
        <button className="btn btn-outline-secondary" disabled={nextDisabled} onClick={() => switchPage(images?.links?.next || '')}>
          Next
        </button>
      </div>
      <Gallery hasSidebar={false} images={images.data} isAdmin={isAdmin(user?.role!)} />
    </>
  );
}
