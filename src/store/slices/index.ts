import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from './auth.slice';
import {commonSlice} from './common.slice';
import {imagesSlice} from './images.slice';
import {statisticSlice} from './statistics.slice';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  images: imagesSlice.reducer,
  common: commonSlice.reducer,
  statistics: statisticSlice.reducer,
});
