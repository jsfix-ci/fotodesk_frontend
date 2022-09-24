import React from 'react';
import {IImage} from '../../store/slices/images.slice';
import Image from './Image';

interface IGalleryProps {
  isAdmin?: boolean;
  hasSidebar?: boolean;
  images: IImage[];
}
export default function Gallery({isAdmin, hasSidebar, images}: IGalleryProps) {
  return (
    <div className="container">
      <div className="row m-0">
        {images?.map((image) => (
          <Image key={image.name} thumb={image.path} isAdmin={isAdmin} hasSidebar={hasSidebar} id={image.id} tags={image.tags} />
        ))}
      </div>
    </div>
  );
}
