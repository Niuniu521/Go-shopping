/**
 * 1安装axios，vue-router，vuex,less，less-loader
 * 2创建项目需要的目录
 * api目录：存放ajax及接口i
 * components目录：普通组件
 * mock目录：模拟后台数据
 * pages目录：路由组件
 * router目录：配置路由
 * store目录：vuex
 * unils目录：缓存的操作
 * 
 * 
 * 
 * 路由跳转分为声明式路由跳转和编程式路由跳转
 * 声明式路由：<router-link to="url" />配合<router-view />使用
 * 编程式路由：$router.push("url")和$router.replace("url")
 * 编程式路由传参：
 * 字符串的写法：$router.push("url/参数")-------params的方式(需要在路由里占位)
 * $router.push("url?参数")----------query的方式(不需要占位)
 * 对象的写法：
 * $router.push({name：'名字'，params：{键：值}})-------params的方式（需要占位和设置name属性）
 * $router.push({path：'地址'，query：{键：值}})---------query的方式（不需要占位）
 * 
 * 
 */