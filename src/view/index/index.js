// import api from '../../config/api';
// import getData from '../../service/getData';
export default {
  name: 'index',
  data () {
    return {
      winHeight: null,
      sideTitle: '',
      navName: '',
      sideLeft: [
        {
          index: '2',
          sideTitle: '报 表',
          nav1: 'report',
          itemList: [
          {name: '病虫报表', nav2: 'disease', index: '/report/disease'},
          {name: '用户报表', nav2: 'user', index: '/report/user'}
          ]
        }, {
          index: '3',
          sideTitle: '样 本',
          nav1: 'sample',
          itemList: [
          {name: '官方样本库', nav2: 'all', index: '/sample/all'},
          {name: '用户样本库', nav2: 'user', index: '/sample/user'}
          ]
        }, {
          index: '4',
          sideTitle: '数 据',
          nav1: 'data',
          itemList: [
          {name: '官方数据', nav2: 'all', index: '/data/all'},
          {name: '用户数据', nav2: 'user', index: '/data/user'}
          ]
        }, {
          index: '5',
          sideTitle: '用 户',
          nav1: 'user',
          itemList: [
          {name: '用户列表', nav2: 'list', index: '/user/list'},
          {name: '用户画像', nav2: 'portrait', index: '/user/portrait'}
          ]
        }, {
          index: '6',
          sideTitle: '安 全',
          nav1: 'security',
          itemList: [
          {name: '操作日志', nav2: 'operation', index: '/security/operation'},
          {name: '成员管理', nav2: 'members', index: '/security/members'}
          ]
        }, {
          index: '7',
          sideTitle: '营 销',
          nav1: 'leaflet',
          itemList: [
          {name: '广告发布', nav2: 'publish', index: '/leaflet/publish'},
          {name: '通知公告', nav2: 'notice', index: '/leaflet/notice'}
          ]
        }
      ],
      activeMenu: '/report/disease'
    };
  },
  methods: {
    /**
     * 退出登录
     */
    logout () {
      localStorage.clear();
      this.$router.push('/login');
    },
    /**
     * 打开导航栏
     */
    handleOpen (key, keyPath) {
    },
    /**
     * 关闭导航栏
     */
    handleClose (key, keyPath) {
    },
    /**
     * 侧边栏跳转路由
     */
    Nav (item, res) {
      this.sideTitle = item.sideTitle;
      this.navName = res.name;
    },
    /**
     * 更新路由获取信息
     */
    fetchData () {
      this.activeMenu = this.$route.path;
      let url = this.$route.path.split('/');
      if (url.length > 2) {
        let Object = this.sideLeft.filter(res => res.nav1 === url[1])[0];
        this.handleOpen(Object.index, [Object.index]);
        this.sideTitle = Object.sideTitle;
        this.navName = Object.itemList.filter(res => res.nav2 === url[2])[0].name;
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted: function () {
    this.winHeight = window.innerHeight;
    this.fetchData();
  }
};
