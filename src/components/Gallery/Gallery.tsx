import React from 'react';
import Image from './Image';

export default function Gallery({isAdmin, hasSidebar}: any) {
  return (
    <div className="container">
      <div className="row m-0">
        {new Array(10).fill({thumb: '/images/thumb.jpeg'}).map((image) => (
          <Image key={Math.random()} thumb={image.thumb} isAdmin={isAdmin} hasSidebar={hasSidebar} />
        ))}
      </div>
    </div>
  );
}
