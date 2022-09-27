import {createSlice} from '@reduxjs/toolkit';

export enum TypeEnum {
  success = 'success',
  error = 'error',
}

export interface IMessage {
  text: string;
  type: TypeEnum;
}

interface ICommonState {
  isLoading: boolean;
  message?: IMessage;
}

const initialState: ICommonState = {
  isLoading: false,
  message: undefined,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      return state;
    },
    setMessage: (state, action) => {
      console.log(action.payload);
      state.message = action.payload;
      return state;
    },
  },
});
