import React from 'react';
import {imagesApi} from '../../api';
import {imagesSlice} from '../../store/slices/images.slice';
import Upload from '../Upload/Upload';

export default function UploadStepOne() {
   
  
  
  return (
    <>
    <Upload api={imagesApi} slice={imagesSlice} fileUpload={imagesApi.uploadImage} setNewFiles={imagesSlice.actions.setNewImages} navigator={'/images/upload/step-2'} />
    
    </>

)

}