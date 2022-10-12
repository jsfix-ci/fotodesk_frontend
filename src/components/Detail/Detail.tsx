import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {commonSlice, TypeEnum} from '../../store/slices/common.slice';
import {imageSizes} from '../../utilities/image-utilities';
import Gallery from '../Gallery/Gallery';
import Tags from '../Gallery/Tags';

export default function Detail({isAdmin}: any) {
  const {image} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const [currentWatermark, setCurrentWatermark] = useState('InfoBijeljina');
  const dispatch = useDispatch();
  const handleCopyUser = (value: string) => {
    navigator.clipboard.writeText(value);
    dispatch(
      commonSlice.actions.setMessage({
        text: 'Uspiješno kopirano',
        type: TypeEnum.success,
      })
    );
  };

  const handleWatermark = (e: any) => {
    setCurrentWatermark(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <img src={image?.path!} className="img-fluid" alt="..." />

          <div className="row mt-4">
            <h4 className="text-start">Related images</h4>
            <Gallery hasSidebar images={image.relatedImages} isAdmin={isAdmin} relatedImage={true} />
          </div>
        </div>

        <div className="col-3">
          <h4 className="fw-bold text-start">Author</h4>
          <div className="input-group w-75">
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder={image?.user?.displayName}
              onClick={() => handleCopyUser(image?.user?.displayName ?? '')}
              readOnly
            />
          </div>
          <h4 className="fw-bold text-start mt-4">Keywords</h4>
          <div className="text-start w-50">
            <Tags tags={image.tags} />
          </div>
          {isAdmin && (
            <>
              <h4 className="fw-bold text-start mt-4">Watermark</h4>
              <div className="form-check text-start">
                <label className="form-check-label w-100">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="watermark"
                    checked={currentWatermark === 'InfoBijeljina'}
                    onChange={handleWatermark}
                    value="InfoBijeljina"
                  />
                  InfoBijeljina
                </label>
              </div>
              <div className="form-check text-start">
                <label className="form-check-label w-100">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="watermark"
                    id="flexRadioDefault2"
                    checked={currentWatermark === 'Cafe.ba'}
                    onChange={handleWatermark}
                    value="Cafe.ba"
                  />
                  Cafe.ba
                </label>
              </div>
            </>
          )}

          {user?.token && (
            <div className="dropdown text-start">
              <button
                className="btn btn-secondary dropdown-toggle mt-3 w-75 p-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {imageSizes.map((imageSize: any) => (
                  <li key={imageSize.value}>
                    <a className="dropdown-item" href={image?.path!} data-value={imageSize.value} download target="_blank" rel="noreferrer">
                      {imageSize.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
