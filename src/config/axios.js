//引入axios
import Vue from 'vue'
import {Message, Loading} from "element-ui";
import axios from 'axios'
import router from '../router/index'

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
  //get去缓存
  if (config.method == 'get') {
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config

}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    let data = response.data;
    let status = response.status;
    if (status === 200) {
      return Promise.resolve(response);
    } else {
      //  el-message
      Message({
        showClose: true,
        message: data.Message,
        type: "error"
      });
      //code判断
      if (data.Code == '101000') {
        router.push('/login');
      }
      return Promise.reject(response);
    }
  }, error => {
  //  el-message
    Message({
      showClose: true,
      message: '遇到了一个意料之外的错误',
      type: "error"
    });
    return Promise.reject(error);
  })

axios.defaults.baseURL = '/v1'
//设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
  ,
//post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}
