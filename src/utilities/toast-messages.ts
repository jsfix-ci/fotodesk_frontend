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
  'putbulk-updateSuccess': {
    text: 'Uspjesno ste dodali tag',
    type: TypeEnum.success,
  },

  'putbulk-updateError': {
    text: 'Neispravan unos',
    type: TypeEnum.error,
  },

  postregisterSuccess: {
    text: 'Uspjesno ste se registrovali',
    type: TypeEnum.success,
  },
};

export const successResponses: {[key: string]: string} = {
  postlogin: 'postloginSuccess',
  postimages: 'postimagesSuccess',
  'putbulk-update': 'putbulk-updateSuccess',
  postregister: 'postregisterSuccess',
};

export const errorResponses: {[key: string]: string} = {
  postlogin: 'postloginError',
  postimages: 'postimagesError',
  'putbulk-update': 'putbulk-updateError',
};
