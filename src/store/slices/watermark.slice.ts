import {createSlice} from '@reduxjs/toolkit';

export interface IWatermark {
  id: null | number;
  name: null | string;
  isDefault: null | boolean;
  path: null | string;
  title: null | string;
}

interface IWatermarks {
  data: IWatermark[];
}

interface IWatermarksState {
  watermarks: IWatermarks;
  watermark: IWatermark;
  newWatermark: IWatermark;
}

const initialState: IWatermarksState = {
  watermarks: {
    data: [],
  },
  watermark: {
    id: null,
    name: null,
    isDefault: null,
    path: null,
    title: null,
  },
  newWatermark: {
    id: null,
    name: null,
    isDefault: null,
    path: null,
    title: null,
  },
};

export const watermarkSlice = createSlice({
  name: 'watermark',
  initialState,
  reducers: {
    setWatermarks: (state, action) => {
      state.watermarks.data = action.payload;
      return state;
    },
    addMoreWatermark: (state, action) => {
      state.watermarks.data = state.watermarks.data.concat(action.payload);
      state.watermarks.data = action.payload.isDefault;
      return state;
    },

    setWatermark: (state, action) => {
      state.newWatermark = action.payload;
      return state;
    },
    updateCurrentWatermark: (state, action) => {
      const currentID = state.watermarks.data.findIndex((ele: any) => ele.id === action.payload.id);
      state.watermarks.data[currentID] = action.payload;
      return state;
      
    },
    updateDefault: (state, action) => {
      console.log(action.payload.id)
      state.watermarks.data = state.watermarks.data.map((watermark) => ({...watermark, isDefault: watermark.id === action.payload.id}));
      return state;
    },
    updateWatermark: (state, action) => {
      state.watermarks.data = state.watermarks.data.map(watermark=>watermark.id===action.payload.id ? action.payload : {...watermark, isDefault:false})
      return state;
    },
    deleteWatermark: (state, action) => {
      state.watermarks.data = state.watermarks.data.filter((ele: any) => ele.id !== action.payload.id);
      return state;
    },
  },
});
