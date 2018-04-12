// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index'  // 引入router-config.js文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/'
import api from './api/api'

import moment from 'moment'
Vue.use(moment)
//axios
Vue.prototype.$ajax = axios

//全局变量
import global from './config/globalvariables'

import './config/axios'
import './config/common'


Vue.prototype.global = global


Vue.use(VueAxios, axios)


//加载路由中间件
Vue.use(VueRouter)
// Vue.use(Container)
Vue.use(ElementUI)


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})


