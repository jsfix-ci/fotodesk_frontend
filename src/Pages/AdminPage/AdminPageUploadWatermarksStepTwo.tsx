import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {watermarksApi} from '../../api';
import {RootState} from '../../store';
import {watermarkSlice} from '../../store/slices/watermark.slice';
import AdminPageUploadStepTwoWatermark from './AdminPageUploadStepTwoWatermark';

export default function AdminPageUploadWatermarksStepTwo({hasSidebar}: any) {
  const {newWatermark} = useSelector((state: RootState) => state.watermarks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.user.token);
  const [title, setTitle] = useState('');

  function handleChange(event: any) {
    setTitle(event.target.value);
  }
  async function handleSubmit(event: any) {
    event.preventDefault();

    const {data} = await watermarksApi.addTitle(newWatermark.id!, {...newWatermark, title: title}, token!);

    dispatch(watermarkSlice.actions.updateWatermark(data));
    navigate('/admin-page/watermarks');
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-secondary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="row m-0">
        <AdminPageUploadStepTwoWatermark
          key={newWatermark.id}
          isEmpty={newWatermark?.title?.length === 0}
          hasSidebar={hasSidebar}
          handleChange={handleChange}
          title={newWatermark.title}
          path={newWatermark.path}
        />
      </div>
    </div>
  );
}
