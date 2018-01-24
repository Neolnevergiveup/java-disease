<template>
  <div class="user_data">
    <div class="user_left">
      <el-input placeholder="搜索作物名称" v-model="input4">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button style="margin-top: 10px;width: 100%;"
                 @click="dialogFormVisible = true">
        全部作物
      </el-button>
      <div>
        <ul>
          <li v-for="item in crops" @click="selectCropt(item)"
              :class="currentCrops === item? 'currentCrop': ''">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="user_right">
      <div class="disease_name">
        <div class="type">
          <p>病害:</p>
          <span>全部</span>
          <ul>
            <li v-for="item in virusList">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <p>展开
            <i class="el-icon-arrow-down"></i></p>
        </div>
        <div class="user_filter type">
          <span>筛选:</span>
          <div class="radio">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="block ">
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
        </div>
      </div>
      <div class="disease_list">
        <el-table
          :data="tableData2"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./data-user.js"></script>

<style scoped lang="scss">
  @import "../../../assets/scss/global";
  @import "./data-user.scss";
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
