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
  postregisterSuccess: {
    text: 'Uspjesno ste se registrovali',
    type: TypeEnum.success,
  },
  postregisterError: {
    text: 'Unesite ispravne podatke',
    type: TypeEnum.error,
  },
  postusersSuccess: {
    text: 'Uspjesno ste dodali korisnika',
    type: TypeEnum.success,
  },
  postusersError: {
    text: 'Popunite sva polja',
    type: TypeEnum.error,
  },
  putusersSuccess: {
    text: 'Uspjesna akcija',
    type: TypeEnum.success,
  },
  putusersError: {
    text: 'Neuspjesna akcija',
    type: TypeEnum.error,
  },
  deleteusersSuccess: {
    text: 'Uspjesno ste obrisali korisnika',
    type: TypeEnum.success,
  },
  deleteusersError: {
    text: 'Neuspjesna akcija',
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
  postimagesSuccess: {
    text: 'Uspjesno ste dodali sliku',
    type: TypeEnum.success,
  },
  postimagesError: {
    text: 'Greska pri ucitavanju',
    type: TypeEnum.error,
  },
  putimagesSuccess: {
    text:'Uspijesna akcija',
    type: TypeEnum.success
  },
  putimagesError: {
    text: 'Neuspijesna akcija',
    type: TypeEnum.error
  },
  deleteimagesSuccess: {
    text: 'Uspijesno ste obrisali sliku',
    type: TypeEnum.success
  },
  deleteimagesError: {
    text: 'Neuspijesna akcija',
    type: TypeEnum.error
  },
  postwatermarksSuccess: {
    text: 'Uspjesno ste dodali watermark',
    type: TypeEnum.success,
  },
  postwatermarksError: {
    text: 'Greska pri ucitavanju',
    type: TypeEnum.error,
  },
  putwatermarksSuccess: {
    text: 'Uspjesna akcija',
    type: TypeEnum.success,
  },
  putwatermarksError: {
    text: 'Neuspjesna akcija',
    type: TypeEnum.error,
  },
  deletewatermarksSuccess: {
    text: 'Uspjesno ste obrisali watermark',
    type: TypeEnum.success,
  },
  deletewatermarksError: {
    text: 'Neuspjesna akcija',
    type: TypeEnum.error,
  },
};

export const successResponses: {[key: string]: string} = {
  postlogin: 'postloginSuccess',
  postregister: 'postregisterSuccess',
  postusers: 'postusersSuccess',
  putusers: 'putusersSuccess',
  deleteusers: 'deleteusersSuccess',
  'putbulk-update': 'putbulk-updateSuccess',
  postimages: 'postimagesSuccess',
  putimages: 'putimagesSuccess',
  deleteimages: 'deleteimagesSuccess',
  postwatermarks: 'postwatermarksSuccess',
  putwatermarks: 'putwatermarksSuccess',
  deletewatermarks: 'deletewatermarksSuccess',
};

export const errorResponses: {[key: string]: string} = {
  postlogin: 'postloginError',
  postregister: 'postregisterError',
  postusers: 'postusersError',
  putusers: 'putusersError',
  deleteusers: 'deleteusersError',
  'putbulk-update': 'putbulk-updateError',
  postimages: 'postimagesError',
  putimages: 'putimagesError',
  deleteimages: 'deleteimagesError',
  postwatermarks: 'postwatermarksError',
  putwatermarks: 'putwatermarksError',
  deletewatermarks: 'deletewatermarksError',
};
