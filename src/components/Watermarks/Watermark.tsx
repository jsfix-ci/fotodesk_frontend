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
          isDefault: !!isDefault ? isDefault : true,
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
      <div className="card p-3 d-flex gap-3 border mt-5">
        <img className="card-img-none" src={path} alt="#" />
        <textarea onChange={handleChange} value={currentTitle}></textarea>
        <div className="card-body d-flex justify-content-center">
          <div className="mt-5 w-100">
            <div className="d-flex gap-3 justify-content-center">
              {!isDefault && (
                <button className="btn bg-light" onClick={toggleDefault}>
                  Set as default
                </button>
              )}
              <button className="btn bg-light" onClick={changeTitle}>
                Save
              </button>

              <button type="button" className="btn btn-danger bg-secondary text-dark border" disabled={isDefault} onClick={deleteWatermark}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
