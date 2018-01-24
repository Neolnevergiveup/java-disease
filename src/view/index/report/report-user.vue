<template>
  <div class="user_report">
    <div class="time">
      <div class="block">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
      <div>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="preview">
      <ul class="title">
        <li>
          <p>新增用户</p>
          <h6>232789</h6>
          <p>环比 1%<i class="el-icon-caret-top"></i></p>
        </li>
        <li>
          <p>活跃用户</p>
          <h6>232789</h6>
          <p>环比 1%<i class="el-icon-caret-top"></i></p>
        </li>
        <li>
          <p>上传样本</p>
          <h6>232789</h6>
          <p>环比 1%<i class="el-icon-caret-top"></i></p>
        </li>
        <li>
          <p>认定样本</p>
          <h6>232789</h6>
          <p>环比 1%<i class="el-icon-caret-top"></i></p>
        </li>
        <li>
          <p>上传数据</p>
          <h6>232789</h6>
          <p>环比 1%<i class="el-icon-caret-top"></i></p>
        </li>
      </ul>
      <div class="trend">
        <div class="trend_left">
          <h6>整体趋势</h6>
          <div>
            <ul>
              <li><p>新增用户</p></li>
              <li><p>上传样本</p></li>
              <li><p>认定样本</p></li>
              <li><p>上传数据</p></li>
            </ul>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="trend_right">
          <h6>2017/12/05</h6>
          <div class="right_title">
            <p>新增用户</p>
            <p>198</p>
            <p>0.54% <i class="el-icon-caret-top"></i></p>
          </div>
          <h6>其中:</h6>
          <ul>
            <li v-for="item in sample">
              <p>番茄</p>
              <div style="width: 150px">
                <el-progress :percentage="70"></el-progress>
              </div>
              <p>0.54%</p>
              <i class="el-icon-caret-top" style="color: #3eb251"></i>
              <p>80个</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./report-user.js">
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/global";
  @import "./report-user.scss";
</style>
