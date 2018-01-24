<template>
  <div class="publish">
    <div class="publish_top">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">商场广告</el-menu-item>
        <el-menu-item index="2">启动页广告</el-menu-item>
      </el-menu>
    </div>
    <div class="showCurrent" v-if="showCurrent === '1'">
      <div style="text-align: left;margin-bottom: 20px;">
        <el-button type="primary"><i class="el-icon-plus" style="margin-right: 10px;"></i>主要按钮</el-button>
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          height="400px"
          style="width: 100%">
          <el-table-column
            fixed
            label="广告"
            width="300">
            <template slot-scope="scope">
              <div class="img_title">
                <img src="/static/img/login/green1.png" alt="">
                <p>dasdsa</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="访问量"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="创建日期"
            sortable
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        showCurrent: '1',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区'
        }]
      };
    },
    methods: {
      handleClick (row) {
        console.log(row);
      },
      handleSelect (key, keyPath) {
        this.showCurrent = key;
        console.log(this.showCurrent);
        console.log(key);
        console.log(keyPath);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "./leaflet-publish.scss";
</style>
