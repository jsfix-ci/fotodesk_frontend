import React from 'react';
import {useDispatch} from 'react-redux';
import {watermarksApi} from '../../api';
import {watermarkSlice} from '../../store/slices/watermark.slice';

export default function Watermark({isDefault, id, path, user}: any) {
  const dispatch = useDispatch();
  async function toggleDefault() {
    try {
      const res = await watermarksApi.updateWatermark(
        id,
        {
          isDefault: true,
        },
        user.token
      );
      dispatch(watermarkSlice.actions.updateWatermark(res.data));
    } catch (error) {
      console.log(error);
    }
  }

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
      <div className="card p-3  border mt-5">
        <img className="card-img-none" src={path} alt="#" />
        <div className="card-body d-flex justify-content-center">
          <div className="mt-5 w-100">
            <div className={`d-flex gap-2 justify-content-${!isDefault ? 'center' : 'end'}`}>
              {!isDefault && (
                <button className="btn bg-light" onClick={toggleDefault}>
                  Set as default
                </button>
              )}
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
