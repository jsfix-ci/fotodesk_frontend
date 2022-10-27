import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi, watermarksApi} from '../../api';
import {RootState} from '../../store';
import {commonSlice, TypeEnum} from '../../store/slices/common.slice';
import {IWatermark} from '../../store/slices/watermark.slice';
import {imageSizes} from '../../utilities/image-utilities';
import Gallery from '../Gallery/Gallery';
import Tags from '../Gallery/Tags';
import AdminDetails from './AdminDetails';
import UsersDetails from './UsersDetails';

export default function Detail({isAdmin, isDetailsEditPage, idImage}: any) {
  const {image} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const [currentWatermark, setCurrentWatermark] = useState<IWatermark>();
  const {data} = useSelector((state: RootState) => state.watermarks.watermarks);

  const [editedTags, setEditedTags] = useState('');
  const dispatch = useDispatch();
  const handleCopyUser = (value: string) => {
    navigator.clipboard.writeText(value);
    dispatch(
      commonSlice.actions.setMessage({
        text: 'Uspiješno kopirano',
        type: TypeEnum.success,
      })
    );
  };

  const handleWatermark = (e: any) => {
    setCurrentWatermark(e);
  };

  async function saveChanges() {
    try {
      await imagesApi.updateImage(+idImage, {...image, tags: editedTags}, user?.token!);
      await watermarksApi.updateWatermark(currentWatermark?.id!, currentWatermark, user?.token!);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (image.tags) setEditedTags(image.tags);
  }, [image]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <img src={image?.path!} className="img-fluid" alt="..." />

          <div className="row mt-4">
            <h4 className="text-start">Related images</h4>
            <Gallery hasSidebar images={image.relatedImages} isAdmin={isAdmin} relatedImage={true} />
          </div>
        </div>

        {isAdmin ? (
          <AdminDetails
            handleCopyUser={handleCopyUser}
            handleWatermark={handleWatermark}
            setEditedTags={setEditedTags}
            isAdmin={isAdmin}
            tags={Tags}
            isDetailsEditPage={isDetailsEditPage}
            image={image}
            editedTags={editedTags}
            saveChanges={saveChanges}
            imageSizes={imageSizes}
            data={data}
            user={user}
            Tags={Tags}
          />
        ) : (
          <UsersDetails
            handleCopyUser={handleCopyUser}
            handleWatermark={handleWatermark}
            setEditedTags={setEditedTags}
            isAdmin={isAdmin}
            tags={Tags}
            isDetailsEditPage={isDetailsEditPage}
            image={image}
            editedTags={editedTags}
            saveChanges={saveChanges}
            imageSizes={imageSizes}
            data={data}
            user={user}
            Tags={Tags}
          />
        )}
      </div>
    </div>
  );
}
