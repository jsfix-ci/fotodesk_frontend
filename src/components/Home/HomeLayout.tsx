import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

export default function HomeLayout() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const next = async (url: string) => {
    try {
      const params = new URLSearchParams(url.split('?')[1]);
      const obj = Object.fromEntries(params);
      const {data} = await imagesApi.getImages(obj);
      dispatch(imagesSlice.actions.addMoreImages(data));
    } catch (error) {
      console.log(error);
    }
  };
  return <Gallery hasSidebar={false} images={images.data} next={next} isAdmin={isAdmin(user?.role!)} relatedImage={false} />;
}
