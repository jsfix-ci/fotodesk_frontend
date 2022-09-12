import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    token: null,
    role: null,
    id: null,
    firstName: null,
    lastName: null,
    displayName: null,
    email: null,
  },

  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      return state;
    },
    logout: (state) => {
      state.user = initialState.user;
      return state;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      return state;
    },
    setMoreUsers: (state, action) => {
      state.users = state.users.concat(action.payload);
      return state;
    },
    resetUsers: (state) => {
      state.users = initialState.users;
      return state;
    },
    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
      return state;
    },
  },
});
