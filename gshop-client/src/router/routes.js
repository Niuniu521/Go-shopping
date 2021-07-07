//引入组件，并注册路由组件------------@相当于src
//引入Home组件
import Home from '@/pages/Home'
//引入注册组件
import Register from '@/pages/Register'
//引入登陆组件
import Login from '../pages/Login'
//引入Search组件
import Search from '../pages/Search'
export default[
  //首页路由组件
  {
    path:'/',
    component:Home
  },
  //注册路由组件
  {
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true  //是否隐藏Footer组件
    }
  },
  //登录路由组件
  {
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true  //是否隐藏Footer组件
    }
  },  
  //搜索路由组件
  {
    name:"search",
    path:'/search/:keyword?',
    component:Search
  },
  {
    path:'/',
    redirect:'/'
  }
]