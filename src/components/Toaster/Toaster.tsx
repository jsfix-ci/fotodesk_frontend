import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import {RootState} from '../../store';
import {commonSlice, TypeEnum} from '../../store/slices/common.slice';

export default function Toaster(props: any) {
  const {message} = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  useEffect(() => {
    toast(message?.text, {
      type: message?.type ?? TypeEnum.success,
    });
    setTimeout(() => {
      dispatch(commonSlice.actions.setMessage(undefined));
    }, 1500);
  }, [message]);
  if (!message) return null;
  return (
    <div className="toster-parent">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
