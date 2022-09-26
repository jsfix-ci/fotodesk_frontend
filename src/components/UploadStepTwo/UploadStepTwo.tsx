import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import UploadStepTwoImage from './UploadStepTwoImage';

export default function UploadStepTwo({hasSidebar}: any) {
  const {newImages} = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.user.token);

  const [modalOpen, setModalOpen] = useState(false);

  function handleChange(event: any, id: any) {
    const tag = event.target.value;
    dispatch(imagesSlice.actions.updateNewImage({id, tag}));
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    await imagesApi.addTags(
      {
        images: newImages,
      },
      token!
    );
    navigate('/profile');
  }

  function showHide() {
    setModalOpen(false);
  }

  return (
    <div className="container">
      <div className="row m-0">
        <div className="d-flex justify-content-end mb-2">
          {modalOpen && (
            <div
              className="modal fade bd-example-modal-xl show"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myExtraLargeModalLabel"
              style={{display: 'block', paddingRight: '15px'}}
              aria-modal="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title h4" id="myExtraLargeModalLabel">
                      Extra large modal
                    </h5>
                    <button onClick={showHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="modal-body">Please add tags in every picture</div>
                    <button className="btn btn-danger h-50 me-2" onClick={handleSubmit}>
                      Continue anyway
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button className="btn btn-secondary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {newImages.map((upload: any, id: any) => (
          <UploadStepTwoImage
            key={id}
            isEmpty={upload?.tags?.length === 0}
            hasSidebar={hasSidebar}
            handleChange={(e: any) => handleChange(e, upload.id)}
            addTags={newImages}
            path={upload?.path}
          />
        ))}
      </div>
    </div>
  );
}
