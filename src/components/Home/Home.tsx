import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Gallery from '../Gallery/Gallery';

export default function Home() {
  const {images} = useSelector((state: RootState) => state.images);
  return <Gallery hasSidebar={false} images={images} />;
}
