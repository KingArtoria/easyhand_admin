import request from './request';
import qs from 'qs'
// ? 登录
export const login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}