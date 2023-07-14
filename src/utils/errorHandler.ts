import { AxiosError } from 'axios';

export interface CustomError {
  location: string;
  msg: string;
  path: string;
  value: string;
  type: string;
}

export const errorHandler = (error: AxiosError<CustomError[]>) => {
  return error.message;
};
