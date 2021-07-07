<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"/>
  </div>
</template>
<script>
//引入Header组件
import Header from './components/Header'
//引入Footer组件
import Footer from './components/Footer'
//引入api接口
import {reqBaseCategoryList} from "./api"
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
   async mounted(){
     const result = await reqBaseCategoryList()
     console.log(result);
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>