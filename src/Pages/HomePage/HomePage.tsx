import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {imagesApi} from '../../api';
import Home from '../../components/Home/Home';
import {imagesSlice} from '../../store/slices/images.slice';

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const getImages = async () => {
      try {
        const params = new URLSearchParams(location.search.slice(1));
        const obj = Object.fromEntries(params);
        const {data} = await imagesApi.getImages(obj);
        dispatch(imagesSlice.actions.setImages(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [dispatch, location]);
  return <Home />;
}
