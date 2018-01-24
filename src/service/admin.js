import * as api from '../config/api';
import { baseUrl } from '../config/env';

export default {
  /**
   * 登录
   */
  login (user) {
    return api.post(`${baseUrl}public/login`, user);
  },
  /**
   * 获取用户是否登录
   */
  getUserInfo (token) {
    return api.get(`${baseUrl}public/checkLogin`, token);
  }
};
