import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {watermarksApi} from '../../api';
import Upload from '../../components/Upload/Upload';
import {RootState} from '../../store';
import {watermarkSlice} from '../../store/slices/watermark.slice';

export default function AdminPageUploadWatermarks() {
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit(files: any) {
    const data = new FormData();

    for (const file of files) {
      data.append('file', file.file);
    }

    data.append('isDefault', 'false');

    const {data: newWatermarks} = await watermarksApi.uploadWatermarks(data, user.token!);
    dispatch(watermarkSlice.actions.addMoreWatermark(newWatermarks));
    navigate('/admin-page/watermarks');
  }
  return (
    <>
      <Upload handleSubmit={handleSubmit} />
    </>
  );
}
