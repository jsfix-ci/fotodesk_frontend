import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {imagesApi} from '../../api';
import {imagesSlice} from '../../store/slices/images.slice';
import PendingImagesPagination from '../ImagePagination/ImagesPagination';

export default function Images() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData, setFormData] = useState({
    keywords: '',
    author: '',
  });

  function handleChange(event: any) {
    const {name, value} = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    return;
  }

  useEffect(() => {
    const getImages = async () => {
      try {
        const params = new URLSearchParams(location.search.slice(1));
        const obj = Object.fromEntries(params);
        const {data} = await imagesApi.getImages(obj);
        dispatch(imagesSlice.actions.setImages(data));
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [dispatch, location]);

  return (
    <div>
      <form className="row justift-content-center align-items-center g-3 mt-4" onSubmit={handleSubmit}>
        <div className="col-5 m-0">
          <input
            className="form-control"
            type="text"
            aria-label="Keywords"
            placeholder="Keywords"
            name="keywords"
            onChange={handleChange}
            value={formData.keywords}
          />
        </div>

        <div className="col-5 m-0">
          <input
            className="form-control"
            id="exampleDataList"
            placeholder="Author"
            name="author"
            onChange={handleChange}
            value={formData.author}
          />
        </div>

        <div className="col-2 m-0">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <PendingImagesPagination />
    </div>
  );
}
