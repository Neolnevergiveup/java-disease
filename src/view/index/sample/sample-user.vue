<template>
  <div class="sample_user">
    <div class="total">
      <ul>
        <li>
          <p>样本总量</p>
          <h6>111<span>个</span></h6>
        </li>
        <li>
          <p>已标注样本</p>
          <h6>111<span>个</span></h6>
        </li>
        <li>
          <p>未标注样本</p>
          <h6>111<span>个</span></h6>
        </li>
        <li>
          <p>报错样本</p>
          <h6>111<span>个</span></h6>
        </li>
      </ul>
    </div>
    <div class="data_details">
      <div class="crops">
        <el-input placeholder="输入作物名称" v-model="input1" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <h6>全部作物</h6>
        <div class="crop_list">
          <ul>
            <li v-for="item in crops" @click="selectCropt(item)"
                :class="currentCrops === item? 'currentCrop': ''">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="virus_details">
        <div class="virus_title">
          <h6>病害:</h6>
          <ul>
            <li>全部</li>
            <li>未标注</li>
            <li>报错</li>
          </ul>
          <ul class="virus_name">
            <li>什么病</li>
            <li>什么病</li>
            <li>什么病</li>
            <li>什么病</li>
            <li>什么病</li>
            <li>什么病</li>
            <li>什么病</li>
          </ul>
          <div class="more">
           <span class="el-dropdown-link">
             展开<i class="el-icon-arrow-down el-icon--right"></i>
           </span>
          </div>
        </div>
        <div class="filter">
          <h6>筛选:</h6>
          <div class="radio">
            <p>地区</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="radio">
            <p>月份</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
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
        </div>
        <div class="search">
          <h6>搜索:</h6>
          <div class="input_search">
            <el-input placeholder="输入用户名称、样本编号进行搜索" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="show_record">
          <ul>
            <li v-for="item in user_data">
              <img src="/static/img/login/forget_back.png" alt="">
              <ul class="user_updata">
                <li><p>未标注</p></li>
                <li><p>灰霉病</p></li>
                <li><p>灰霉病</p></li>
              </ul>
              <p>2017/12/13 13:13:40</p>
            </li>
          </ul>
        </div>
        <div class="pages">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./sample-user.js"></script>

<style scoped lang="scss">
  @import "./sample-user.scss";
</style>
