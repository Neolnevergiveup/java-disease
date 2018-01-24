import axios from 'axios';
import { Loading } from 'element-ui';
let loading;
// 添加请求拦截器

// axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  // 过滤掉OPTIONS 请求头
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  loading = Loading.service();
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loading.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      }).catch(err => {
        reject(err);
      });
  });
};

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      }).catch(err => {
        reject(err);
      });
  });
};
