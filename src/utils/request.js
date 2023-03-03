import axios from 'axios';
const service = axios.create({
  baseURL: 'http://fgifast1.vipnps.vip:56396',
  headers: { 'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
});
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;