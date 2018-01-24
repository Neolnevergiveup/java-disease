<template>
  <div class="sample_all">
    <div class="species">
      <ul>
        <li>
          <p>作物种类</p>
          <h6>13<span>种</span></h6>
        </li>
        <li>
          <p>样本总量</p>
          <h6>132133<span>个</span></h6>
        </li>
        <li>
          <p>样本类型</p>
          <h6>13312<span>个</span></h6>
        </li>
        <li>
          <p>平均样本数量</p>
          <h6>13321321<span>个</span></h6>
        </li>
      </ul>
    </div>
    <div class="data_details">
      <div class="crops">
        <el-input placeholder="输入作物名称" v-model="input1" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button class="add_crop"><i class="el-icon-circle-plus-outline"></i>添加作物</el-button>
        <div>
          <ul>
            <li v-for="item in crops" @click="selectCropt(item)"
                :class="currentCrops === item? 'currentCrop': ''">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="virus">
        <div class="virus_name">
          <h6>病害</h6>
          <el-button class="add_virus"><i class="el-icon-circle-plus-outline"></i>添加病害</el-button>
          <ul>
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
        <div class="virus_details">
          <h6 class="current_name">什么病</h6>
          <div class="virus_list">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./sample-all.js"></script>

<style scoped lang="scss">
  @import "./sample-all.scss";
</style>
