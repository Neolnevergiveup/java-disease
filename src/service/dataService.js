import * as api from '../config/api';
import { baseUrl } from '../config/env';

export default {
  /**
   * 获取所有作物名称
   */
  getCrop (res) {
    return api.get(`${baseUrl}disease/allData`, res);
  },
  /**
   * 添加作物
   */
  addCrop (res) {
    return api.post(`${baseUrl}disease/addCrop`, res);
  },
  /**
   * 更新作物信息
   */
  updapaCrop (res) {
    return api.post(`${baseUrl}disease/editCrop`, res);
  },
  /**
   * 删除作物
   */
  detaleCrop (res) {
    return api.post(`${baseUrl}disease/delCrop`, res);
  },
  /**
   * 获取病害信息
   */
  getDisease (res) {
    return api.get(`${baseUrl}disease/allData`, res);
  },
  /**
   * 添加病害信息
   */
  addDisease (res) {
    return api.post(`${baseUrl}disease/addDisease`, res);
  },
  /**
   * 更新病害信息
   */
  upDisease (res) {
    return api.post(`${baseUrl}disease/editDisease`, res);
  },
  /**
   * 删除病害信息
   */
  deteleDisease (res) {
    return api.post(`${baseUrl}disease/delDisease`, res);
  },
  /**
   * 得到病害图片的地址
   */
  getImgUrl (res) {
    return api.get(`${baseUrl}disease/allData`, res);
  },
  /**
   * 删除病害图片
   */
  deleteImg (res) {
    return api.post(`${baseUrl}disease/deletePic`, res);
  }
};
