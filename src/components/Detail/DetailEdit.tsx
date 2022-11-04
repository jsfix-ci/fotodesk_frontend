import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Detail from './Detail';

export default function DetailEdit() {
  const {id} = useParams();
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getImage = async (id: number) => {
      try {
        const {data} = await imagesApi.getUserImage(id, user.token!);
        dispatch(imagesSlice.actions.setImage(data));
      } catch (error) {
        console.log(error);
      }
    };
    id && user?.token && getImage(+id);
    return () => {
      dispatch(imagesSlice.actions.resetImage());
    };
  }, [id, user?.token, dispatch]);

  return <Detail isAdmin={isAdmin(user?.role!)} isDetailsEditPage={true} idImage={id} />;
}
