import request from './request';
import qs from 'querystring'
// 登录
export const login = data => {
  return request({
    url: '/sys/user/login',
    method: 'POST',
    data: qs.stringify(data),
  });
}