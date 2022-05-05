
import Vue from 'vue'
import App from './App.vue'
//1 全局混合，所有组件都会共用
import {mixin} from './mixin'
Vue.config.productionTip = false
// 2全局混合
Vue.mixin(mixin)
new Vue({
    el:'#app',
    render:h => h(App)
})