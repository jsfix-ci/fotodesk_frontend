import {createSlice} from '@reduxjs/toolkit';

export interface IImage {
  author: null | string;
  tags: string[];
  id: null | number;
  path: null | string;
  name: null | string;
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
    path: null,
    name: null,
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
    setImages: (state, action) => {
      state.images = action.payload;
      return state;
    },
    addMoreImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
      return state;
    },

    setImage: (state, action) => {
      state.image = action.payload;
      return state;
    },
    setNewImages: (state, action: IImagePayload) => {
      state.newImages = action.payload;
      return state;
    },
    updateNewImage: (state, action) => {
      state.newImages = state.newImages.map((ele: any) => (ele.id === action.payload.id ? {...ele, tags: action.payload.tag} : ele));
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
