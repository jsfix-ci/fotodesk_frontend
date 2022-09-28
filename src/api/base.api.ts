import axios, {AxiosInstance} from 'axios';
import {StoreKeeper} from '../store';
import {commonSlice} from '../store/slices/common.slice';
import {errorResponses, getMessage, successResponses} from '../utilities/toast-messages';

export default class BaseApi {
  private request: AxiosInstance;
  protected token: string | null = null;
  constructor() {
    this.request = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer: ${StoreKeeper.store.getState().auth.user.token}`,
      },
    });
    let loadingTimeout: NodeJS.Timeout;
    this.request.interceptors.request.use((config) => {
      loadingTimeout && clearTimeout(loadingTimeout);
      loadingTimeout = setTimeout(() => {
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(true));
      }, 500);
      return config;
    });
    this.request.interceptors.response.use(
      (success) => {
        clearTimeout(loadingTimeout);
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(false));
        const message = successResponses[success.config.method! + success.config.url?.split('/').at(-1) ?? ''];

        console.log(success.config.method! + success.config.url?.split('/').at(-1));
        const dispatchMessage = getMessage(message);
        if (dispatchMessage) StoreKeeper.store.dispatch(commonSlice.actions.setMessage(dispatchMessage));
        return success;
      },
      (error) => {
        clearTimeout(loadingTimeout);
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(false));
        const message = errorResponses[error.config.url?.split('/').at(-1) ?? ''];
        const dispatchMessage = getMessage(message);
        if (dispatchMessage) StoreKeeper.store.dispatch(commonSlice.actions.setMessage(dispatchMessage));
        throw error;
      }
    );
  }

  protected headers(token: string, isMultipart?: boolean) {
    return {
      headers: {
        Authorization: `Bearer ${this.token ?? token}`,
        'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
      },
    };
  }

  updateHeader(token: string) {
    this.token = token;
  }

  protected async get(url: string, token?: string, params?: any): Promise<any> {
    return this.request({
      url,
      method: 'GET',
      ...this.headers(token!),
      params,
    });
  }
  protected async post(url: string, data: any, token?: string, isMultipart?: boolean): Promise<any> {
    return this.request({
      url,
      method: 'POST',
      data,
      ...this.headers(token!, isMultipart),
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
  protected async delete(url: string, token: string): Promise<any> {
    return this.request({
      url,
      method: 'DELETE',
      ...this.headers(token),
    });
  }
}
