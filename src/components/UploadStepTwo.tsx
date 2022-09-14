import React, {useEffect} from 'react';
import UploadStepTwoImage from '../components/UploadStepTwoImage';
import {useDispatch, useSelector} from 'react-redux';
import {imagesSlice} from '../store/slices/images.slice';

export default function UploadStepTwo({hasSidebar}: any) {
  const {newImages=[]} = useSelector((state: any) => state.images);
  const dispatch = useDispatch();

  function handleChange(event: any, id: any) {
    const tag = event.target.value.split(',').filter((s:string)=>!!s.length);

    
    
    dispatch(imagesSlice.actions.updateNewImage({id,tag}))
  }


  function handleSubmit(event: any) {
    event.preventDefault();
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
          <button className="btn btn-secondary" onSubmit={handleSubmit}>
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
