import React from 'react';
import Image from './Image';
import thumb from '../Gallery/thumb.jpeg';
export default function Gallery({isAdmin, hasSidebar}: any) {
  return (
    <div className="container">
      <div className="row m-0">
        {new Array(10).fill({thumb}).map((image) => (
          <Image thumb={image.thumb} isAdmin={isAdmin} hasSidebar={hasSidebar} />
        ))}
      </div>
    </div>
  );
}
