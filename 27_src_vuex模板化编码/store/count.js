export default {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        // 加
        JIA(state,value){
            console.log('JIA',value);
            state.sum += value
        },
        // 减
        JIAN(state,value){
            state.sum -= value
        }
    },
    state:{
        sum:0, //当前的和
        school:'硅谷',
        subject:'前端'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}