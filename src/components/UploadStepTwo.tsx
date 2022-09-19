import React, {useEffect, useState} from 'react';
import UploadStepTwoImage from '../components/UploadStepTwoImage';
import {useDispatch, useSelector} from 'react-redux';
import {imagesSlice} from '../store/slices/images.slice';

export default function UploadStepTwo({hasSidebar}: any) {
  const {newImages} = useSelector((state: any) => state.images);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [isUserWarned, setUserIsWarned] = useState(false);

  function handleChange(event: any, id: any) {
    const tag = event.target.value.split(',').filter((s: string) => !!s.length);
    dispatch(imagesSlice.actions.updateNewImage({id, tag}));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setModalOpen(false);
    //kad se klikne na sumbit da li je upozoren korisnik
    //ako je upozoren korisnik nastaviti operaciju do kraja
    //ako korisnik nije upozoren prvo setovati da se korisnik upozori
    //prikazi modal
    //
    if (isUserWarned) {
      dispatch(imagesSlice.actions.resetNewImages());
      return;
    }

    if (newImages.some((i: any) => !i?.tags?.length)) {
      setModalOpen(true);
      setUserIsWarned(true);
      return;
    }
    dispatch(imagesSlice.actions.resetNewImages());
  }

  function showHide() {
    setModalOpen(false);
  }

  useEffect(() => {
    dispatch(
      imagesSlice.actions.setNewImages([
        {
          author: 'Bob',
          id: 1,
          tags: [],
          url: '/images/thumb.jpeg',
          relatedImages: [],
        },
        {
          author: 'Bob',
          id: 2,
          tags: [],
          url: 'https://www.blabla.com',
          relatedImages: [],
        },
      ])
    );
  }, []);

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
            isEmpty={upload.tags.length === 0}
            thumb={upload.thumb}
            hasSidebar={hasSidebar}
            handleChange={(e: any) => handleChange(e, upload.id)}
            addTags={newImages}
          />
        ))}
      </div>
    </div>
  );
}
