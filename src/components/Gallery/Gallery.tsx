import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {IImage} from '../../store/slices/images.slice';
import Image from './Image';

interface IGalleryProps {
  isAdmin?: boolean;
  hasSidebar?: boolean;
  images: IImage[];
  next?: (...args: any) => void;
}
export default function Gallery({isAdmin, hasSidebar, images, next}: IGalleryProps) {
  const {images: moreImages} = useSelector((state: RootState) => state.images);

  return (
    <div className="container mt-4">
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          next?.(moreImages.links?.next!);
        }}
        hasMore={!!moreImages.links?.next}
        loader={<></>}
      >
        <div className="row m-0">
          {images?.map((image) => (
            <Image
              key={image.name}
              thumb={image.path}
              isAdmin={isAdmin}
              hasSidebar={hasSidebar}
              id={image.id}
              tags={image.tags}
              authorName={image?.user?.displayName}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
