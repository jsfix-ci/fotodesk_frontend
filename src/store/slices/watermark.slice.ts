import {createSlice} from '@reduxjs/toolkit';

// import {ILinks, IMeta} from '../../utilities/common-interfaces';

export interface IWatermark {
  id: number;
  title: string;
  name: string;
  isDefault: boolean;
  path: string;
}

interface IWatermarks {
  data: IWatermark[];
}

const initialState: IWatermarks = {
  data: [],
};

export const watermarkSlice = createSlice({
  name: 'watermark',
  initialState,
  reducers: {
    setWatermarks: (state, action) => {
      state.data = action.payload;
      return state;
    },
    addMoreWatermark: (state, action) => {
      state.data = state.data.concat(action.payload);
      state.data = action.payload.isDefault;
      return state;
    },

    setWatermark: (state, action) => {
      (state as any).isDefault = action.payload.isDefault;
      return state;
    },
    updateWatermark: (state, action) => {
      state.data = state.data.map((ele: any) => (ele.id === action.payload.id ? {...ele, isDefault: true} : {...ele, isDefault: false}));
      return state;
    },
    deleteWatermark: (state, action) => {
      state.data = state.data.filter((ele: any) => ele.id !== action.payload.id);
      return state;
    },
  },
});
