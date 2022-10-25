import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {watermarksApi} from '../../api';
import {RootState} from '../../store';
import {watermarkSlice} from '../../store/slices/watermark.slice';
import Watermark from './Watermark';

export default function Watermarks() {
  const {data: watermarks}: any = useSelector((state: RootState) => state.watermarks.watermarks);

  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWatermarks = async () => {
      try {
        const {data} = await watermarksApi.getWatermarks(user.token!);
        console.log(data);
        
        dispatch(watermarkSlice.actions.setWatermarks(data));
      } catch (error) {
        console.log(error);
      }
    };
    user?.token && getWatermarks();
  }, [dispatch, user?.token]);

  return (
    <div>
      <div className="row">
        {watermarks?.map((watermark: any) => (
          <Watermark key={watermark.name} {...watermark} user={user} />
        ))}
      </div>
    </div>
  );
}
