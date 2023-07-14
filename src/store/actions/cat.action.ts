import { AppDispatch } from '..';

import {
  IBreed,
  ICat,
  addFavoriteFailure,
  addFavoriteStart,
  addFavoriteSuccess,
  deleteFavoritesIdFailure,
  deleteFavoritesIdStart,
  deleteFavoritesIdSuccess,
  getBreedsFailure,
  getBreedsIdFailure,
  getBreedsIdStart,
  getBreedsIdSuccess,
  getBreedsStart,
  getBreedsSuccess,
  getCatFailure,
  getCatStart,
  getCatSuccess,
  getCatsFailure,
  getCatsStart,
  getCatsSuccess,
  getFavoritesFailure,
  getFavoritesStart,
  getFavoritesSuccess,
  getMoreFailure,
  getMoreStart,
  getMoreSuccess,
} from '../reducers/cat.reducer';
import { request } from '../../config/request';
import { errorHandler } from '../../utils/errorHandler';

export const getCatsAction = async (dispatch: AppDispatch) => {
  dispatch(getCatsStart());
  try {
    const { data } = await request.get<ICat[]>('/images/search?limit=10');
    dispatch(getCatsSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getCatsFailure(error));
  }
};

export const getCatIdAction = async (
  dispatch: AppDispatch,
  id: string,
  cats?: ICat[]
) => {
  dispatch(getCatStart());
  try {
    if (cats && cats.length > 0) {
      const data = cats.find((cat) => cat.id === id);
      dispatch(getCatSuccess(data));
      return;
    }

    const { data } = await request.get<ICat>(`/images/${id}`);
    dispatch(getCatSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getCatFailure(error));
  }
};

export const addFavoriteAction = async (
  dispatch: AppDispatch,
  id: string,
  cats?: ICat[]
) => {
  dispatch(addFavoriteStart());
  try {
    if (!cats) {
      return;
    }
    const data = cats.find((cat) => cat.id === id);

    dispatch(addFavoriteSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(addFavoriteFailure(error));
  }
};

export const getFavoritesAction = async (
  dispatch: AppDispatch,
  id: string,
  cats?: ICat[]
) => {
  dispatch(getFavoritesStart());
  try {
    if (!cats) {
      return;
    }
    const data = cats.find((cat) => cat.id === id);

    dispatch(getFavoritesSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getFavoritesFailure(error));
  }
};

export const deleteFavoritesIdAction = async (
  dispatch: AppDispatch,
  id: string,
  cats: ICat[]
) => {
  dispatch(deleteFavoritesIdStart());
  try {
    const data = cats.filter((cat) => cat.id !== id);

    dispatch(deleteFavoritesIdSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(deleteFavoritesIdFailure(error));
  }
};

export const getMoreAction = async (dispatch: AppDispatch) => {
  dispatch(getMoreStart());
  try {
    const { data } = await request.get('/images/search?limit=10');
    dispatch(getMoreSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getMoreFailure(error));
  }
};

export const getBreedsAction = async (dispatch: AppDispatch) => {
  dispatch(getBreedsStart());
  try {
    const { data } = await request.get<IBreed[]>('/breeds');
    dispatch(getBreedsSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getBreedsFailure(error));
  }
};

export const getBreedsIdAction = async (dispatch: AppDispatch, id: string) => {
  dispatch(getBreedsIdStart());
  try {
    const { data } = await request.get<ICat[]>(
      `/images/search?breed_ids=${id}&limit=4`
    );
    dispatch(getBreedsIdSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getBreedsIdFailure(error));
  }
};
