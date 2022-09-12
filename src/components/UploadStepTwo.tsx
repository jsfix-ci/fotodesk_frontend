import React, {useEffect, useState} from 'react';
import UploadStepTwoImage from '../components/UploadStepTwoImage';
import {useDispatch, useSelector} from 'react-redux';
import {IImage, imagesSlice} from '../store/slices/images.slice';

export default function UploadStepTwo({hasSidebar}: any) {
  const [imageWithTags, setImageWithTags] = useState<IImage[]>([]);
  const {newImages} = useSelector((state: any) => state.images);

  function handleChange(event: any, id: any) {
    const tag = event.target.value;
    setImageWithTags((prevState) => {
      const copyState = [...prevState];
      copyState[id] = {...copyState[id], tags: tag};
      return copyState;
    });
    console.log(imageWithTags.map((e) => e.tags));
  }

  const dispatch = useDispatch();

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(
      imagesSlice.actions.newImages([
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
      imagesSlice.actions.newImages([
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

  useEffect(() => {
    setImageWithTags(newImages);
    console.log(newImages);
  }, [{newImages}]);

  return (
    <div className="container">
      <div className="row m-0">
        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-secondary" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
        {imageWithTags.map((upload: any, id: any) => (
          <UploadStepTwoImage
            key={id}
            isEmpty={upload.tags.length === 0}
            thumb={upload.thumb}
            hasSidebar={hasSidebar}
            handleChange={(e: any) => handleChange(e, id)}
            addTags={imageWithTags}
          />
        ))}
      </div>
    </div>
  );
}
