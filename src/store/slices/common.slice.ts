import {createSlice} from '@reduxjs/toolkit';

enum TypeEnum {
  success = 'success',
  warning = 'warning',
}

interface IMessage {
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
      state.message = action.payload;
      return state;
    },
  },
});
