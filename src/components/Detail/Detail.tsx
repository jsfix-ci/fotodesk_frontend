import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {imagesApi, watermarksApi} from '../../api';
import {RootState} from '../../store';
import {commonSlice, TypeEnum} from '../../store/slices/common.slice';
import {imagesSlice} from '../../store/slices/images.slice';
import {watermarkSlice} from '../../store/slices/watermark.slice';
import {imageSizes} from '../../utilities/image-utilities';
import Gallery from '../Gallery/Gallery';
import AdminDetails from './AdminDetails';
import UsersDetails from './UsersDetails';

export default function Detail({isAdmin, isDetailsEditPage, idImage}: any) {
  const {image} = useSelector((state: RootState) => state.images);
  const {user} = useSelector((state: RootState) => state.auth);
  const {data: watermarks} = useSelector((state: RootState) => state.watermarks.watermarks);

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

  const handleWatermark = async (watermark: any) => {
    const {data} = await imagesApi.getUserImage(+idImage, user?.token!, {watermarkId: watermark.id});
    dispatch(imagesSlice.actions.setImage(data));
    dispatch(watermarkSlice.actions.updateDefault(watermark));
  };

  async function saveChanges() {
    try {
      await imagesApi.updateImage(+idImage, {...image, tags: editedTags}, user?.token!);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (image.tags) setEditedTags(image.tags);
  }, [image]);

  useEffect(() => {
    async function getWatermarks() {
      const {data: watermarks} = await watermarksApi.getWatermarks(user.token!);
      dispatch(watermarkSlice.actions.setWatermarks(watermarks));
    }
    if (!!isDetailsEditPage) getWatermarks();
  }, [isDetailsEditPage, user.token, dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <img src={image?.path!} className="img-fluid" alt="..." />

          {!isAdmin && (
            <div className="row mt-4">
              <h4 className="text-start">Related images</h4>
              <Gallery hasSidebar images={image.relatedImages} isAdmin={isAdmin} relatedImage={true} />
            </div>
          )}
        </div>
        {isAdmin ? (
          <AdminDetails
            handleCopyUser={handleCopyUser}
            setEditedTags={setEditedTags}
            handleWatermark={handleWatermark}
            image={image}
            editedTags={editedTags}
            saveChanges={saveChanges}
            imageSizes={imageSizes}
            data={watermarks}
          />
        ) : (
          <UsersDetails handleCopyUser={handleCopyUser} image={image} imageSizes={imageSizes} user={user} />
        )}
      </div>
    </div>
  );
}
