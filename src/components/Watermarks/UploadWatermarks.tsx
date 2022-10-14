import React  from 'react';
import {watermarksApi} from '../../api';
import {watermarkSlice} from '../../store/slices/watermark.slice';
import Upload from '../Upload/Upload';

export default function UploadWatermarks(isDefault:any) {
  
  return (
        <>
        <Upload  api={watermarksApi} slice={watermarkSlice} fileUpload={watermarksApi.uploadWatermarks} setNewFiles={watermarkSlice.actions.addMoreWatermark} navigator={'/admin-page/watermarks'} 
         submit={true}/>
      
        </>)
}
