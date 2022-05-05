// main.js是整个项目的入口文件

import Vue from 'vue'
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false

new Vue({
  // 功能：将App组件放入容器
  render: h => h(App),
}).$mount('#app')
