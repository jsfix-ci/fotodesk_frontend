import axios, {AxiosInstance} from 'axios';
import {StoreKeeper} from '../store';

export default class BaseApi {
  protected request: AxiosInstance;
  protected token: string | null = null;

  constructor() {
    this.request = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer: ${StoreKeeper.store.getState().auth.user.token}`,
      },
    });
  }

  protected headers(token: string) {
    return {
      headers: {
        Authorization: `Bearer ${this.token ?? token}`,
      },
    };
  }

  updateHeader(token: string) {
    this.token = token;
  }
}
