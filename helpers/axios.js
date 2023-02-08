import axios from 'axios'
import {getCookie, deleteCookie} from './cookies'

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = getCookie('user-token');
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // if (err.response.status === 403 && err.response.data) {
      //   return Promise.reject(err.response.data);
      // }

      if (err.response.status === 403 || err.response.status === 401) {
        deleteCookie('user-token');
        window.location.href = '/login';
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);


export default instance;