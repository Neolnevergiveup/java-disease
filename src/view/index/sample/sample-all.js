export default {
  data () {
    return {
      input1: '',
      crops: [
        {name: '番茄'},
        {name: '番茄'},
        {name: '番茄'},
        {name: '番茄'},
        {name: '番茄'}
      ],
      currentCrops: {}
    };
  },
  methods: {
    /**
     * 选择作物
     */
    selectCropt (item) {
      this.currentCrops = item;
    }
  },
  mounted: function () {
    this.currentCrops = this.crops[0];
  }
};
