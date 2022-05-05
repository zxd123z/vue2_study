
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 引入elementui插件
import ElementUI from 'element-ui'
// 完整引入样式（包太大）
// import 'element-ui/lib/theme-chalk/index.css';
// 按需引入
import Button  from 'element-ui';



// 应用插件
Vue.use(ElementUI);
Vue.use(Button)
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// 创建vm
new Vue({
    el:'#app',
    render:h => h(App),
  
   
})