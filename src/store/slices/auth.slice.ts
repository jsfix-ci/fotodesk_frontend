import {createSlice} from '@reduxjs/toolkit';
import {ILinks, IMeta} from '../../utilities/common-interfaces';

interface IUser {
  token: null | string;
  role: null | string;
  id: null | number;
  firstName: null | string;
  lastName: null | string;
  displayName: null | string;
  email: null | string;
}
interface IUsers {
  data: IUser[];
  links?: ILinks;
  meta?: IMeta;
}

interface IUserState {
  user: IUser;
  users: IUsers;
}

const initialState: IUserState = {
  user: {
    token: null,
    role: null,
    id: null,
    firstName: null,
    lastName: null,
    displayName: null,
    email: null,
  },

  users: {
    data: [],
  },
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
      state.users.data = state.users.data.concat(action.payload.data);
      state.users.links = action.payload.links;
      state.users.meta = action.payload.meta;

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
    deleteUser: (state, action) => {
      state.users.data = state.users.data.filter((user) => user?.id !== action.payload);
      return state;
    },
  },
});
