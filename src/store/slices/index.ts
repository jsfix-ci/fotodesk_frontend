import {combineReducers} from '@reduxjs/toolkit';
// import {authSlice} from './auth.slice';
import {imagesSlice} from './images.slice';

export const rootReducer = combineReducers({
  // auth: authSlice.reducer,
  images: imagesSlice.reducer,
});
