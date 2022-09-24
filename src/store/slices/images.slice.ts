import {createSlice} from '@reduxjs/toolkit';

export interface IImage {
  author: null | string;
  tags: null | string;
  id: null | number;
  path: null | string;
  name: null | string;
  relatedImages: IImage[];
}

interface ILinks {
  first?: string;
  previous?: string;
  current: string;
  next?: string;
  last?: string;
}

interface IMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: any;
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
