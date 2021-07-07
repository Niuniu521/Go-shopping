//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入路由器
import router from './router'
//引入TypeNav（商品分类组件）
import TypeNav from './components/TypeNav'
//注册全局组件（TypeNav组件）
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false
//创建vue示例，并挂载
new Vue({
  render: h => h(App),
  //注册路由器
  router
}).$mount('#app')
