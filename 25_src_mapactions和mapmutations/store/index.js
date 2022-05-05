
// 该文件用于创建vuex中最为核心的store
// 引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
// 准备actions  用于响应组件中的动作
const actions = {
    // 奇数再加
    jiaOdd(context,value){
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },
    // 等一等再加
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
        console.log(context);
    }
}
// 准备mutations 用于操作数据（state）
const mutations = {
    // 加
    JIA(state,value){
        console.log('JIA',value);
        state.sum += value
    },
    // 减
    JIAN(state,value){
        state.sum -= value
    }
    
}
// 准备state 用于存储数据
const state = {
    sum:0, //当前的和
    school:'硅谷',
    subject:'前端'
}
// 准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建并暴露（导出）store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})