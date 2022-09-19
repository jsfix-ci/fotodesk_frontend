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

  protected async get(url: string, token: string): Promise<any> {
    return this.request({
      url,
      method: 'GET',
      ...this.headers(token),
    });
  }
  protected async post(url: string, data: any, token?: string): Promise<any> {
    return this.request({
      url,
      method: 'POST',
      data,
      ...this.headers(token!),
    });
  }
  protected async put(url: string, data: any, token: string): Promise<any> {
    return this.request({
      url,
      method: 'PUT',
      data,
      ...this.headers(token),
    });
  }
  protected async patch(url: string, data: any, token: string): Promise<any> {
    return this.request({
      url,
      method: 'PATCH',
      data,
      ...this.headers(token),
    });
  }
  protected async delete(url: string, data: any, token: string): Promise<any> {
    return this.request({
      url,
      method: 'DELETE',
      data,
      ...this.headers(token),
    });
  }
}
