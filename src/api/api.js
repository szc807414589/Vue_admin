import axios from '../config/axios';

/*登录*/
export const loginByUsername =  (Account, Pwd) => {
  const data = {
    Account,
    Pwd
  }
  return axios.post('admin/login',data)
}
/*登出*/
export const logOut = () =>{
  return axios.post('/admin/logout')
}


/*用户反馈*/
export const getFeedBackRecord = params => {
  return axios.post('/feedback/record',params)
}








