
// 该文件用于创建vuex中最为核心的store
// 引入vue和vuex

import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)
// 引入count和person的vuex
import countObtions from './count'
import personObtions from './person'


 

// 创建并暴露（导出）store
export default new Vuex.Store({
    modules:{
        count:countObtions,
        person:personObtions
    }
})