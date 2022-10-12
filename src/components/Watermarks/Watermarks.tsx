import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {watermarksApi} from '../../api';
import {RootState} from '../../store';
import {watermarkSlice} from '../../store/slices/watermark.slice';
import Watermark from './Watermark';

interface IWatermarksProps {
  id: number;
  name: string;
  isDefault?: boolean;
  path: string;
}
export default function Watermarks({isDefault}: IWatermarksProps) {
  const {data} = useSelector((state: RootState) => state.watermarks);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWatermarks = async () => {
      try {
        const {data} = await watermarksApi.getWatermarks(user.token!);
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
        {data && data?.map((watermark) => (
          <Watermark key={watermark.name} {...watermark} user={user} />
        ))}
      </div>
    </div>
  );
}
