
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入插件
import plugins from './plugins'
// 应用
Vue.use(plugins)
new Vue({
    el:'#app',
    render:h => h(App)
})