import {AuthApi} from './auth.api';
import BaseApi from './base.api';
import {ImagesApi} from './images.api';
import {UsersApi} from './users.api';
import {WatermarksApi} from './watermarks.api';

export const imagesApi = new ImagesApi();

export const usersApi = new UsersApi();

export const authApi = new AuthApi();

export const baseApi = new BaseApi();

export const watermarksApi = new WatermarksApi();
