<template>
    <div>
        <h3>当前的和为：{{sum}}</h3>
        <h3>当前的放大十倍和为：{{bigSum}}</h3>
        <h3>我在{{school}}学{{subject}}</h3>
        <!-- 复用数据 -->
        <h3>person组件的人数为{{personList.length}}</h3>
       <select v-model.number="n">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
       </select>
       <button @click="increment(n)">+</button>
       <button @click="decrement(n)">-</button>
       <button @click="incrementOdd">当前和为奇数再加</button>
       <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
// 引入映射，用于帮助我们映射state和getters中的数据为计算属性
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:'Count',
     data() {
          return {   
              n:1, //用户选择的数字    
          }
        },
        methods: {
        
        /* 
        mapactions和mapmutations如果需要传参，在模板中绑定事件时传递好参数，否则参数是事件对象
        */

        //借助mapMutations生成的方法，方法中会调用commit去练习mutations（对象写法）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        // 数组写法(需要两个名字一致才能用)
        // ...mapMutations(['JIA','JIAN']), 
     

        //借助mapactions生成与action对话的方法，方法中会调用dispatch去练习actions（对象写法）
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        // 数组写法
        // ...mapActions(['',''])
        },  
        computed:{
            // ...运算符能将【数组】或对象转换成逗号分割的参数序列,es6写法
            // 借助mapstate生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum:'sum',school:'school',subject:'subject'}),
            // 数组写法
            ...mapState(['sum','school','subject','personList']),

            // 借助mapgetters生成计算属性，从getters中读取数据（对象写法） 
            ...mapGetters({bigSum:'bigSum'}),
            // 数组写法
            // ...mapGetters(['bigSum'])
        },
        mounted() {
            
        }, 
}
</script>

<style scoped>
   
    h3{
        text-align: center;
        background-color: bisque;
    }
   
</style>