<template>
  <div class="index">
    <el-container style="width: 100%" :style="{minHeight: winHeight + 'px'}">
      <el-aside width="150px" style="background-color: #545c64" :style="{minHeight: winHeight + 'px'}">
        <el-col :span="24">
          <div style="height: 60px;width: 100%;"></div>
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :unique-opened="true"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">看 板</span>
            </el-menu-item>
            <template v-for="item in sideLeft">
              <el-submenu :index="item.index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.sideTitle}}</span>
                </template>
                <template v-for="to in item.itemList">
                  <el-menu-item-group>
                    <el-menu-item :index="to.index" @click="Nav(item, to)">{{to.name}}</el-menu-item>
                  </el-menu-item-group>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <div style="float: right">
            <el-button type="primary" @click="logout">退出登录</el-button>
          </div>
        </el-header>
        <el-main>
          <el-breadcrumb separator="/" v-if="navName">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{sideTitle}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{navName}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss">
  @import "../../assets/scss/global";
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    .el-menu{
      border: none;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-submenu .el-menu-item{
    min-width: 90px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
