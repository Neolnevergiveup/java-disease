<template>
  <div class="user_portrait">
    <h5>用户属性</h5>
    <div class="attribute">
      <div class="regional">
        <h6>地域</h6>
        <ul>
          <li v-for="item in list">
            <p>广东</p>
            <div class="progress">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </div>
            <p>80个</p>
          </li>
        </ul>
      </div>
      <div class="loginWay">
        <p>登录方式</p>
        <div id="login_way" style="width: 100%;height: 400px;">
        </div>
      </div>
    </div>
    <h5>用户环境</h5>
    <div class="env">
      <div class="env_top">
        <div class="version">
          <h6>Android版本</h6>
          <div id="version" style="width: 100%;height: 400px;">

          </div>
        </div>
        <div class="channel">
          <h6>渠道</h6>
          <div id="channel">

          </div>
        </div>
      </div>
    </div>
    <div class="models">
      <h6>机型分布TOP10</h6>
      <div class="models_chart">
        <div id="models"></div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="150">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./user-portrait.js"></script>

<style scoped lang="scss">
  @import "./user-portrait.scss";
</style>
