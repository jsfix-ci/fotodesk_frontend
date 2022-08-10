import React from 'react';
// import Sea from './components/Gallery/sea.jpg';

export default function Detail({isAdmin}: any) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <img src="/images/sea.jpg" className="img-fluid" alt="..." />

          <div className="row mt-4">
            <h4 className="text-start">Related images</h4>
            <div className="col-4">
              <img src="/images/sea.jpg" className="img-fluid" alt="..." />
            </div>
            <div className="col-4">
              <img src="/images/sea.jpg" className="img-fluid" alt="..." />
            </div>
            <div className="col-4">
              <img src="/images/sea.jpg" className="img-fluid" alt="..." />
            </div>
          </div>
        </div>

        <div className="col-3">
          <h4 className="fw-bold text-start">Author</h4>
          <div className="input-group w-75">
            <input type="text" aria-label="First name" className="form-control" placeholder="Author name" readOnly />
          </div>
          <h4 className="fw-bold text-start mt-4">Keywords</h4>
          <p className="text-start w-50">Image, keyword, description</p>
          {isAdmin && (
            <>
              <h4 className="fw-bold text-start mt-4">Watermark</h4>
              <div className="form-check text-start">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label">InfoBijeljina</label>
              </div>
              <div className="form-check text-start">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label">Cafe.ba</label>
              </div>
            </>
          )}

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
              <li>
                <a className="dropdown-item" href="#">
                  Large (1920x1080)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Medium (800x600)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Small (640x480)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
