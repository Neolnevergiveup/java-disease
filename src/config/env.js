/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://192.168.1.138:8050/'
  baseUrl = 'http://192.168.1.144/nb2018/www/index.php/';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://39.108.76.246:80/';
}
export {
  baseUrl
};
