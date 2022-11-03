import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {imagesApi} from '../../api';
import Detail from '../../components/Detail/Detail';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';

export default function DetailGet() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getImage = async (id: number) => {
      try {
        let image;
        if (user.token) {
          const {data} = await imagesApi.getUserImage(id, user.token!);
          image = data;
        } else {
          const {data} = await imagesApi.getGuestImage(id);
          image = data;
        }
        dispatch(imagesSlice.actions.setImage(image));
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    };
    id && getImage(+id);
    return () => {
      dispatch(imagesSlice.actions.resetImage());
    };
  }, [id, dispatch, user, navigate]);

  return <Detail isDetailsEditPage={false} />;
}
