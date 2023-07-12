import { AxiosError } from 'axios';

export interface CustomError {
  location: string;
  msg: string;
  path: string;
  value: string;
  type: string;
}

export const errorHandler = (error: AxiosError<CustomError[]>) => {
  if (error.response && Array.isArray(error.response.data)) {
    const { msg } = error.response.data[0];
    return msg;
  }
  return error.message;
};
