
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入VueRouter插件
import VueRouter from 'vue-router'
// 引入创建的router路由器
import router from './router'
// 应用插件
Vue.use(VueRouter)
// 创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    router:router
   
})