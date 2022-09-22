import {createSlice} from '@reduxjs/toolkit';

interface IMessage {
  message?: string;
  type: string;
}
interface ICommonState {
  isLoading: boolean;
  message: IMessage;
}
const initialState: ICommonState = {
  isLoading: false,
  message: {
    message: '',
    type: '',
  },
};
export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      return state;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
      return state;
    },
  },
});
