//引入ajax
import axios from 'axios'
//引入nprogress插件包及样式
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const ajax=axios.create({
  baseURL:'api',
  timeOut:10000
})

//请求拦截器
ajax.interceptors.request.use(config=>{

  Nprogress.start()
  return config
})


//响应拦截器
ajax.interceptors.response.use(response=>{
  Nprogress.done()
  return response.data
},error=>{
  Nprogress.done()
  alert("请求出错：" +error.message||"未知错误")
  return Promise.reject(error)
})


//向外暴露ajax
export default ajax