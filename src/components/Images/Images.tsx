import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {debounce} from 'lodash';
import {imagesApi} from '../../api';
import {imagesSlice} from '../../store/slices/images.slice';
import ImagesPagination from '../ImagePagination/ImagesPagination';

export default function Images() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = debounce((event: any) => {
    handleSubmit(event.target.value);
  }, 1000);

  async function handleSubmit(value: string | number) {
    try {
      const {data} = await imagesApi.getGuestImages({search: value});
      dispatch(imagesSlice.actions.setImages(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getImages = async () => {
      try {
        const params = new URLSearchParams(location.search.slice(1));
        const obj = Object.fromEntries(params);
        const {data} = await imagesApi.getGuestImages(obj);
        dispatch(imagesSlice.actions.setImages(data));
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [dispatch, location]);

  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <input
                className="form-control"
                type="text"
                aria-label="Keywords"
                placeholder="Keywords"
                name="keywords"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <ImagesPagination />
    </div>
  );
}
