
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入store
import store  from './store'
// 创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})