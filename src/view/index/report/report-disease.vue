<template>
  <div class="disease_report">
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
    <div class="report_data">
      <div class="report_data_top">
        <ul>
          <li v-for="item in sample">
            <p>上传样本</p>
            <h5>130<span>个</span></h5>
            <div>
              <p>环比 <span>0.54%</span></p>
              <img src="" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="report_echart">
        <div class="left">
          <h5>整体趋势</h5>
          <div>
            <ul>
              <li v-for="item in sample"><p>{{item.name}}</p></li>
            </ul>
            <div class="echart">
              <div id="option1" style="background-color: #2B78E2;"></div>
              <div id="option2" style="background-color: #333333"></div>
              <div id="option3" style="background-color: #A0A0A0"></div>
              <div id="option4" style="background-color: #da3232"></div>
              <div id="option5" style="background-color: aqua"></div>
            </div>
          </div>
        </div>
        <div class="right">
          <h6>2017/10/04</h6>
          <ul>
            <li v-for="item in sample">
              <p>{{item.name}}</p>
              <p>198</p>
              <div>
                <p>0.53%</p>
                <img src="" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="report_distribution">
        <div class="distribution_left">
          <h5>分布趋势</h5>
          <ul>
            <li v-for="item in sample" :class="item === currentDistribution? 'currentDistribution': ''"
                @click="selectDistribution(item)">
              <p>{{item.name}}</p>
            </li>
          </ul>
          <div id="distribution" class="distribution">
          </div>
        </div>
        <div class="distribution_right">
          <div class="distribution_right_top">
            <h6>2017/12/05</h6>
            <div class="distribution_right_data">
              <p>{{currentDistribution.name}}</p>
              <p>198</p>
              <div>
                <span>0.54</span>
                <img src="" alt="">
              </div>
            </div>
          </div>
          <div class="among">
            <h6>其中</h6>
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

  </div>
</template>

<script src="./report-disease.js"></script>

<style scoped lang="scss">
  @import "../../../assets/scss/global";
  @import "./report-disease.scss";
</style>
