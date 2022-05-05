import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true, //开启命名空间
    actions:{
        add_wang(context,value){
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON',value)
            }else{
                alert('必须姓王')
            }
        },
        // 随机添加一个人，与后端服务器链接
        add_random(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error =>{
                    alert(error.message)
                }
                )
        }
    },
    mutations:{
        // 添加人
        ADD_PERSON(state,value){
            console.log('调用了添加人');
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstName(state){
            return state.personList[0].name
        }
    }
}