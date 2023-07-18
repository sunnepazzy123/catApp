import axios from 'axios';

const { REACT_APP_CAT_API_KEY, REACT_APP_DOMAIN } = process.env;

export const request = axios.create({
  baseURL: REACT_APP_DOMAIN,
  headers: {
    'x-api-key': REACT_APP_CAT_API_KEY,
  },
});
