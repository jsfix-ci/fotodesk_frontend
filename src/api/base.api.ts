import axios, {AxiosInstance} from 'axios';
import {StoreKeeper} from '../store';

export default class BaseApi {
  protected request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer: ${StoreKeeper.store.getState().auth.user.token}`,
      },
    });
  }

  updateHeader(token: string) {
    this.request = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
  }
}
