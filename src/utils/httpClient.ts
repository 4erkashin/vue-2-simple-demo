import axios from 'axios';
import { moduleRequestsPending } from '@/store/modules/ModuleRequestsPending';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
httpClient.interceptors.request.use(
  (config) => {
    const cancelSource = axios.CancelToken.source();
    moduleRequestsPending.addCancelToken(cancelSource);

    config.cancelToken = cancelSource.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { httpClient };
