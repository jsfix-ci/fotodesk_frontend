import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {imagesApi} from '../../api';
import Detail from '../../components/Detail/Detail';
import {imagesSlice} from '../../store/slices/images.slice';

export default function DetailGet() {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getImage = async (id: number) => {
      try {
        const {data} = await imagesApi.getImage(id);
        dispatch(imagesSlice.actions.setImage(data));
      } catch (error) {
        console.log(error);
      }
    };
    id && getImage(+id);
    return () => {
      dispatch(imagesSlice.actions.resetImage());
    };
  }, [id, dispatch]);

  return <Detail isDetailsEditPage={false} />;
}
