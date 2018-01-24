import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/store';
import echarts from 'echarts';

import 'element-ui/lib/theme-chalk/index.css';

import './assets/scss/element-variables.scss';
import './assets/scss/style.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
