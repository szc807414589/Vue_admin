<template>
  <div>
    <el-form class="login-container">
      <h3>登录</h3>
      <el-form-item>
        <el-input type="text" v-model="logindata.Account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="logindata.Pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {loginByUsername} from '../api/api'

  export default {
    name: '',
    data() {
      return {
        logindata: {
          Account: '',
          Pwd: ''
        }
      }
    },
    methods: {

      login() {
        var me = this;
        loginByUsername(me.logindata.Account, me.logindata.Pwd)
          .then((res) => {
            me.$router.push({path: '/main'});
          })
          .catch((err) => {
            me.logindata.Pwd = '';
          })
      }

    }
  }
</script>
<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login-container .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
