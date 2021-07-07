//引入封装的文件
import ajax from "./ajax"
//获取三级分类数据信息列表
export const reqBaseCategoryList=()=>ajax("/product/getBaseCategoryList")//后台服务器数据地址
export const reqLogin=(mobile,password)=>ajax("/user/passport/login",{mobile,password})//后台服务器登录接口地址
//