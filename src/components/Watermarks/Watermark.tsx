import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {watermarksApi} from '../../api';
import {watermarkSlice} from '../../store/slices/watermark.slice';

export default function Watermark({isDefault, id, path, user, title}: any) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const dispatch = useDispatch();
  async function changeTitle() {
    try {
      const res = await watermarksApi.addTitle(
        id,
        {
          isDefault,
          title: currentTitle,
        },
        user.token
      );
      dispatch(watermarkSlice.actions.updateCurrentWatermark(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleDefault() {
    try {
      const res = await watermarksApi.updateWatermark(
        id,
        {
          isDefault: true,
          title: currentTitle,
        },
        user.token
      );
      dispatch(watermarkSlice.actions.updateDefault(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: any) => {
    setCurrentTitle(e.target.value);
  };

  async function deleteWatermark() {
    try {
      await watermarksApi.deleteWatermark(id, user.token);
      dispatch(watermarkSlice.actions.deleteWatermark({id}));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <img src={path} alt="#" />
          <textarea onChange={handleChange} className={'form-control'} value={currentTitle}></textarea>
        </div>
          <div className="card-footer">
              {!isDefault && (
                <button className="btn btn-sm btn-info me-2" onClick={toggleDefault}>
                  Set as default
                </button>
              )}
              <button className="btn btn-sm btn-success me-2" onClick={changeTitle}>
                Save
              </button>

              <button type="button" className="btn btn-sm btn-danger" disabled={isDefault} onClick={deleteWatermark}>
                Delete
              </button>
            </div>
        </div>
    </div>
  );
}
