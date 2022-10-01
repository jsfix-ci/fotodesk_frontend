import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {imagesApi} from '../../api';
import Detail from '../../components/Detail/Detail';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';

export default function DetailPage() {
  const {id} = useParams();
  const {user} = useSelector((state: RootState) => state.auth);
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

  return <Detail isAdmin={isAdmin(user?.role!)} />;
}
