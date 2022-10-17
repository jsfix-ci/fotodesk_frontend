import {createSlice} from '@reduxjs/toolkit';
import {ILinks, IMeta} from '../../utilities/common-interfaces';

export interface IImage {
  author: null | string;
  tags: null | string;
  id: null | number;
  path: null | string;
  name: null | string;
  relatedImages: IImage[];
  user?: {
    displayName: string;
  };
}

interface IImages {
  data: IImage[];
  links?: ILinks;
  meta?: IMeta;
}
interface IImagesState {
  images: IImages;
  image: IImage;
  newImages: IImage[];
}

const initialState: IImagesState = {
  images: {
    data: [],
  },
  image: {
    author: null,
    tags: null,
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
      state.images.data = state.images.data.concat(action.payload.data);
      state.images.links = action.payload.links;
      state.images.meta = action.payload.meta;
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
    resetImage: (state) => {
      state.image = initialState.image;
      return state;
    },
    resetNewImages: (state) => {
      state.newImages = [];
      return state;
    },
    deleteImage: (state, action) => {
      state.images.data = state.images.data.filter((image) => image?.id !== action.payload);
      return state;
    },
    deleteRelatedImage: (state, action) => {
      state.image.relatedImages = state.image.relatedImages.filter((image) => image?.id !== action.payload);
      return state;
    },
  },
});
