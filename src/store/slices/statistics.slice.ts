import {createSlice} from '@reduxjs/toolkit';

export interface IStatistic {
  pendingUsers: number;
  pendingImages: number;
}

const initialState: IStatistic = {
  pendingUsers: 0,
  pendingImages: 0,
};

export const statisticSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatistics: (state, action) => {
      state = action.payload;
      return state;
    },
    resetStatistics: (state) => {
      state = initialState;
      return state;
    },
  },
});
