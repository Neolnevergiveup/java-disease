export default {
  methods: {
    handleClick (row) {
      console.log(row);
    }
  },
  data () {
    return {
      input5: '',
      department: [
        {name: '超级管理员'},
        {name: '运营'},
        {name: '后台'},
        {name: '产品'}
      ],
      tableData: [
        {
        name: '老刘',
        account: '18890220091',
        department: '运营',
        },
        {
        name: '老刘',
        account: '18890220091',
        department: '运营',
        },
        {
          name: '老刘',
          account: '18890220091',
          department: '运营',
        },
        {
          name: '老刘',
          account: '18890220091',
          department: '运营',
        },

      ]
    };
  }
};
