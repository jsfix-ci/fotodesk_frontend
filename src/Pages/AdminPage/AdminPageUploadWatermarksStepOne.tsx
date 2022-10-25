import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {watermarksApi} from '../../api';
import Upload from '../../components/Upload/Upload';
import {RootState} from '../../store';
import {watermarkSlice} from '../../store/slices/watermark.slice';

export default function AdminPageUploadWatermarksStepOne() {
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit(files: any) {
    const data = new FormData();

    for (const file of files) {
      data.append('file', file.file);
    }

    data.append('isDefault', 'false');
    data.append('title', '');

    const {data: newWatermark} = await watermarksApi.uploadWatermarks(data, user.token!);
    dispatch(watermarkSlice.actions.setWatermark(newWatermark));
    navigate('/admin-page/upload-watermarks/step-2');
    console.log(newWatermark);
  }
  return (
    <>
      <Upload handleSubmit={handleSubmit} />
    </>
  );
}
