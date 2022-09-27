import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

function UserImages() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = async () => {
      try {
        const {data} = await imagesApi.myImages(user.token!);
        dispatch(imagesSlice.actions.setImages(data));
      } catch (error) {
        console.log(error);
      }
    };
    user?.token && getImages();
  }, [dispatch, user?.token]);
  const next = async (url: string) => {
    try {
      const params = new URLSearchParams(url.split('?')[1]);
      const obj = Object.fromEntries(params);
      const {data} = await imagesApi.myImages(user.token!, obj);
      dispatch(imagesSlice.actions.addMoreImages(data));
    } catch (error) {
      console.log(error);
    }
  };
  return <Gallery hasSidebar={true} images={images.data} next={next} isAdmin={isAdmin(user?.role!)} />;
}

export default UserImages;
