import {ImagesApi} from './images.api';
import {UsersApi} from './users.api';

const request = (...args: any) => {
  return Promise.all(args.map((arg: any) => Promise.resolve(arg)));
};

export const imagesApi = new ImagesApi(request);

export const usersApi = new UsersApi(request);
