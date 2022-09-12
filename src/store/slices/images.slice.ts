import {createSlice} from '@reduxjs/toolkit';

export interface IImage {
  author: null | string;
  tags: string[];
  id: null | number;
  url: null | string;
  relatedImages: IImage[];
}
interface IImagesState {
  images: IImage[];
  image: IImage;
  newImages: IImage[];
}

const initialState: IImagesState = {
  images: [],
  image: {
    author: null,
    tags: [],
    id: null,
    url: null,
    relatedImages: [],
  },
  newImages: [],
};

interface IImagePayload {
  payload: IImage[];
}

export const imagesSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    images: (state, action) => {
      state.images = action.payload;
      return state;
    },
    addMoreImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
      return state;
    },

    image: (state, action) => {
      state.image = action.payload;
      return state;
    },
    newImages: (state, action: IImagePayload) => {
      state.newImages = action.payload;
      return state;
    },
    resetNewImages: (state) => {
      state.newImages = [];
      return state;
    },
  },
});


//setuje se lista  slika
//dodaje se jos slika na listu
//uzima se jedna slikaa
//dodaju se nove slike
//kad se zavrsi upload stejt za nove slike se resetuje
