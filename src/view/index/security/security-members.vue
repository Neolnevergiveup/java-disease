<template>
  <div class="members">
    <div class="top">
      <div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <div>
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="user_list">
      <div class="side_left">
        <h6>所有部门</h6>
        <div class="department">
          <ul>
            <li v-for="item in department"><p>{{item.name}}</p></li>
          </ul>
        </div>
      </div>
      <div class="user_details">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="name"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="account"
            label="账号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="department"
            label="所在部门"
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

<script src="./security-members.js"></script>

<style scoped lang="scss">
  @import "./security-members.scss";
</style>
