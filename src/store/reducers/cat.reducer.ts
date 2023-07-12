import { createSlice } from '@reduxjs/toolkit';
import { cats } from '../../dummy';

export interface CatState {
  cats: ICat[];
  favorites: ICat[];
  breeds: IBreed[];
  breed: ICat[];
  cat: ICat | null;
  isFetching: boolean;
  error: null | string;
}

export interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: IBreed[];
}

interface IWeight {
  imperial: string;
  metric: string;
}

export interface IBreed {
  weight: IWeight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  description: string;
  life_span: string;
  wikipedia_url: string;
}

const catSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: [...cats],
    favorites: [],
    breeds: [],
    breed: [],
    cat: null,
    isFetching: false,
    error: null,
  } as CatState,
  reducers: {
    getCatsStart: (state) => {
      state.isFetching = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getCatsFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    getCatStart: (state) => {
      state.isFetching = true;
    },
    getCatSuccess: (state, action) => {
      state.cat = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getCatFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    getMoreStart: (state) => {
      state.isFetching = true;
    },
    getMoreSuccess: (state, action) => {
      state.cats = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getMoreFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    addFavoriteStart: (state) => {
      state.isFetching = true;
    },
    addFavoriteSuccess: (state, action) => {
      const favorite = state.favorites.find(
        (item) => item.id === action.payload.id!
      );
      if (favorite) {
        state.isFetching = false;
        state.error = null;
        return;
      }
      state.favorites = [...state.favorites, action.payload];
      state.isFetching = false;
      state.error = null;
    },
    addFavoriteFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    getFavoritesStart: (state) => {
      state.isFetching = true;
    },
    getFavoritesSuccess: (state, action) => {
      state.favorites = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getFavoritesFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    deleteFavoritesIdStart: (state) => {
      state.isFetching = true;
    },
    deleteFavoritesIdSuccess: (state, action) => {
      state.favorites = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    deleteFavoritesIdFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    getBreedsStart: (state) => {
      state.isFetching = true;
    },
    getBreedsSuccess: (state, action) => {
      state.breeds = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getBreedsFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    getBreedsIdStart: (state) => {
      state.isFetching = true;
    },
    getBreedsIdSuccess: (state, action) => {
      state.breed = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getBreedsIdFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const {
  getCatsStart,
  getCatsSuccess,
  getCatsFailure,
  getCatStart,
  getCatSuccess,
  getCatFailure,
  getMoreStart,
  getMoreSuccess,
  getMoreFailure,
  addFavoriteStart,
  addFavoriteSuccess,
  addFavoriteFailure,
  getBreedsStart,
  getBreedsSuccess,
  getBreedsFailure,
  getBreedsIdStart,
  getBreedsIdSuccess,
  getBreedsIdFailure,
  getFavoritesSuccess,
  getFavoritesFailure,
  getFavoritesStart,
  deleteFavoritesIdStart,
  deleteFavoritesIdSuccess,
  deleteFavoritesIdFailure,
} = catSlice.actions;
export default catSlice.reducer;
