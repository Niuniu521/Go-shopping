//引入Vue
import Vue from 'vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入routes
import routes from './routes'


//解决路由跳转的bug
const originPath=VueRouter.prototype.push
VueRouter.prototype.push=function(location, onComplete=()=>{}, onAbort){
return originPath.call(this,location, onComplete, onAbort)

}


//声明并使用路由
Vue.use(VueRouter)
//实例化路由器对象并暴露出去
export default new VueRouter({
  mode:'history',
  routes
})
/**
 * import Vue from 'vue'
 * import VueRouter from 'vue-router'
 * Vue.use(VueRouter)
 * export default new VueRouter({
 *  mode:'history',
 *  routes[]        
 * 
 * 本来是下面这种写法，但是这样写太臃肿，所有我们把routers定义到外面，然后引入进来，
 * routers后面的[]就可以不写，就是上面我们用的方法
 * 
 * })
 */
