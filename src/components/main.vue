<template>

  <div id="app">
    <!-- 头部导航 -->
    <headerbar></headerbar>

    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <side-bar></side-bar>
      </div>

      <!-- 右侧主内容区 -->
      <div class="main-right">
        <router-view class="view"></router-view>
      </div>

    </main>
  </div>

</template>

<script>
  import Vue from 'vue'
  import header from 'components/header.vue'
  import menu from 'components/menu.vue'

  export default {
    name: 'app',
    data: function () {
      return {
        active: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      checklogin() {

      }
    },
    components: {
      'side-bar': menu,
      'headerbar': header
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
  }

  /* 头部导航 */
  header {
    z-index: 1000;
    transition: all 0.5s ease;
    border-top: solid 4px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    height: 80px;
    line-height: 80px;
  }

  .el-dropdown-link {
    cursor: pointer;

  }

  /* 主内容区 */
  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #E9ECF1;
    background-color: #FCFCFC;
  }

  main .main-left {
    text-align: center;
    width: 200px;
    float: left;
  }

  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    padding: 50px 70px;
  }

  main .el-menu {
    background-color: transparent !important;
  }
</style>

