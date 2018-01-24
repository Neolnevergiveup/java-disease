<template>
  <div class="user_list">
    <div class="grouping">
      <h6>用户分组</h6>
      <div>
        <p>全部用户 <span>(999)</span></p>
        <ul>
          <li>没付费的用户</li>
          <li>没付费的用户</li>
          <li>没付费的用户</li>
          <li>没付费的用户</li>
          <li>没付费的用户</li>
        </ul>
      </div>
    </div>
    <div class="show_list">
      <div class="button">
        <el-button type="primary">设置分组</el-button>
        <el-button>禁用</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <!--<div style="margin-top: 20px;text-align: left;">-->
        <!--<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>-->
        <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script src="./user-list.js"></script>

<style scoped lang="scss">
  @import "./user-list.scss";
</style>
