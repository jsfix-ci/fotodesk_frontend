import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import Upload from '../Upload/Upload';

export default function UploadStepOne() {
  const {user} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(files: any) {
    const data = new FormData();
    for (const file of files) {
      data.append('files', file.file);
    }

    const {data: newFiles} = await imagesApi.uploadImage(data, user.token!);
    dispatch(imagesSlice.actions.setNewImages(newFiles));
    navigate('/images/upload/step-2');
  }

  return <Upload handleSubmit={handleSubmit} />;
}
