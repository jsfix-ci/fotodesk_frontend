import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi} from '../../api';
import {RootState} from '../../store';
import {imagesSlice} from '../../store/slices/images.slice';
import {isAdmin} from '../../utilities/helper';
import Gallery from '../Gallery/Gallery';

interface ILinks {
  current: string;
  last: string;
  next: string;
}

export default function ImagePagination() {
  const {images} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [links, setLinks] = useState<ILinks>();
  const [selectedQuery, setSelectedQuery] = useState('');

  useEffect(() => {
    const getImages = async () => {
      try {
        const {data} = await imagesApi.getImages(user?.token!, selectedQuery);
        dispatch(imagesSlice.actions.setImages(data));
        setLinks(data.links);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [selectedQuery]);
  const handleLink = (isNext = false) => {
    if (isNext) {
      setSelectedQuery(`?${links?.next?.split('?')?.at(-1)}`);
    } else {
      setSelectedQuery(`?${links?.last?.split('?')?.at(-1)}`);
    }
  };

  return (
    <>
      <div className="pagination d-flex justify-content-center m-2">
        <button className="btn btn-outline-secondary" onClick={() => handleLink(false)}>
          Prev
        </button>
        <button className="btn btn-outline-secondary" onClick={() => handleLink(true)}>
          Next
        </button>
      </div>
      <Gallery hasSidebar={true} images={images.data} isAdmin={isAdmin(user?.role!)} />
    </>
  );
}
