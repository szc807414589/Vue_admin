<template>
  <div>
    <header class="header">
      <el-row>
        <el-col :span="3" :offset="3">
          欢迎回来
          <a class="username">admin</a>
        </el-col>
        <el-col :span="3" :offset="15">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="loginOut">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 60px;width: 100%;"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {logOut} from '../api/api'
  export default {
    name: 'headerbar',
    data() {
      return {}
    },
    created() {

    },
    methods: {
      loginOut(){
        logOut().then((res) => {
          this.$router.push({ path: '/login' });
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $width:10px;
  $textcolor:#409EFF;
  .username{
    color: $textcolor;
    cursor: pointer;
  }
</style>
