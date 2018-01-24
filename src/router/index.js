import Vue from 'vue';
import Router from 'vue-router';
// import store from '../store/store';
// import Admin from '../service/admin';

// 登陆注册忘记密码 => login模块
const Login = r => require.ensure([], () => (require('./../view/admin/login.vue')), 'admin');

// 侧边栏，公共组件
const index = r => require.ensure([], () => r(require('./../view/index/index.vue')), 'index');

// 报表模块
const reportDisease = r => require.ensure([], () => r(require('../view/index/report/report-disease.vue')), 'report');
const reportUser = r => require.ensure([], () => r(require('../view/index/report/report-user.vue')), 'report');

// 样本
const sampleAll = r => require.ensure([], () => r(require('../view/index/sample/sample-all.vue')), 'sample');
const sampleUser = r => require.ensure([], () => r(require('../view/index/sample/sample-user.vue')), 'sample');

// 数据
const dataAll = r => require.ensure([], () => r(require('../view/index/data/data-all.vue')), 'data');
const dataUser = r => require.ensure([], () => r(require('../view/index/data/data-user.vue')), 'data');

// 用户
const userList = r => require.ensure([], () => r(require('../view/index/user/user-list.vue')), 'user');
const userPortrait = r => require.ensure([], () => r(require('../view/index/user/user-portrait.vue')), 'user');

// 安全
const securityOperation = r => require.ensure([], () => r(require('../view/index/security/security-operation.vue')), 'security');
const securityMembers = r => require.ensure([], () => r(require('../view/index/security/security-members.vue')), 'security');

// 营销
const leafletPublish = r => require.ensure([], () => r(require('../view/index/leaflet/leaflet-publish.vue')), 'leaflet');
const leafletNotice = r => require.ensure([], () => r(require('../view/index/leaflet/leaflet-notice.vue')), 'leaflet');

// 代码测试用的页面  上线忽略
const Test = r => require.ensure([], () => r(require('../view/test.vue')), 'test');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      component: index,
      children: [
        {
          path: 'report/disease',
          component: reportDisease
        },
        {
          path: 'report/user',
          component: reportUser
        },
        {
          path: 'data/all',
          component: dataAll
        },
        {
          path: 'data/user',
          component: dataUser
        },
        {
          path: 'sample/all',
          component: sampleAll
        },
        {
          path: 'sample/user',
          component: sampleUser
        },
        {
          path: 'user/list',
          component: userList
        },
        {
          path: 'user/portrait',
          component: userPortrait
        },
        {
          path: 'security/operation',
          component: securityOperation
        },
        {
          path: 'security/members',
          component: securityMembers
        },
        {
          path: 'leaflet/publish',
          component: leafletPublish
        },
        {
          path: 'leaflet/notice',
          component: leafletNotice
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test',
      component: Test
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 全局路由控制
  // if (!to.path.toString().includes('/login')) {
  //   let token = localStorage.getItem('token');
  //   Admin.getUserInfo({token}).then(res => {
  //     if (res.errorCode === 0) {
  //       localStorage.setItem('user', JSON.stringify(res.data));
  //       localStorage.setItem('token', res.data.token);
  //       store.state.user = res.data;
  //     } else {
  //       localStorage.setItem('user', '');
  //       localStorage.setItem('token', '');
  //       router.push('/login');
  //     }
  //   });
  // } else {
  //   if (localStorage.user) {
  //     router.push('/');
  //   }
  // }
  next();
});

export default router;
