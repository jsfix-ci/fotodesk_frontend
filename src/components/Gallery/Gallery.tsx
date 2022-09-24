import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {IImage} from '../../store/slices/images.slice';
import {imagesSlice} from '../../store/slices/images.slice';
import Image from './Image';

interface IGalleryProps {
  isAdmin?: boolean;
  hasSidebar?: boolean;
  images: IImage[];
}
export default function Gallery({isAdmin, hasSidebar, images}: IGalleryProps) {
  const dispatch = useDispatch();
  const {images: moreImages} = useSelector((state: RootState) => state.images);
  const next = async (url: string) => {
    try {
      const params = new URLSearchParams(url.split('?')[1]);
      const obj = Object.fromEntries(params);
      const {data} = await imagesApi.getImages(obj);
      dispatch(imagesSlice.actions.addMoreImages(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          next(moreImages.links?.next!);
        }}
        hasMore={!!moreImages.links?.next}
        loader={<></>}
      >
        <div className="row m-0">
          {images?.map((image) => (
            <Image key={image.name} thumb={image.path} isAdmin={isAdmin} hasSidebar={hasSidebar} id={image.id} tags={image.tags} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
