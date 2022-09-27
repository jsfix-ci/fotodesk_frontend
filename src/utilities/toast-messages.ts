import {TypeEnum} from '../store/slices/common.slice';

export const messagesMap: {[key: string]: any} = {
  postloginSuccess: {
    text: 'Dobro dosli',
    type: TypeEnum.success,
  },
  postloginError: {
    text: 'Pogresni podaci',
    type: TypeEnum.error,
  },
  postimagesSuccess: {
    text: 'Uspjesno ste dodali sliku',
    type: TypeEnum.success,
  },
  postimagesError: {
    text: 'Greska pri ucitavanju',
    type: TypeEnum.error,
  },
};

export const successResponses: {[key: string]: string} = {
  postlogin: 'postloginSuccess',
  postimages: 'postimagesSuccess',
};

export const errorResponses: {[key: string]: string} = {
  postlogin: 'postloginError',
  postimages: 'postimagesError',
};
