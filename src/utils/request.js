import axios from 'axios';
const service = axios.create({
  baseURL: 'http://124.222.54.38:8080',
  timeout: 10000,
  headers:{"hahah":"xx"}
});
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;