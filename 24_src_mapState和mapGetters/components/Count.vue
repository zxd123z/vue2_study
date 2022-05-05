<template>
    <div>
        <h3>当前的和为：{{sum}}</h3>
        <h3>当前的放大十倍和为：{{bigSum}}</h3>
        <h3>我在{{school}}学{{subject}}</h3>
       <select v-model.number="n">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
       </select>
       <button @click="increment">+</button>
       <button @click="decrement">-</button>
       <button @click="incrementOdd">当前和为奇数再加</button>
       <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
// 引入映射，用于帮助我们映射state和getters中的数据为计算属性
import {mapState,mapGetters} from 'vuex'
export default {
    name:'Count',
     data() {
          return {   
              n:1, //用户选择的数字    
          }
        },
        methods: {
          increment(){
              this.$store.commit('JIA',this.n)
          },
          decrement(){
                this.$store.commit('JIAN',this.n)
          },
          incrementOdd(){
              this.$store.dispatch('jiaOdd',this.n)
          },
          incrementWait(){
               this.$store.dispatch('jiaWait',this.n)
          }  
        },  
        computed:{
            // ...运算符能将【数组】或对象转换成逗号分割的参数序列,es6写法
            // 借助mapstate生成计算属性，从state中读取数据（对象写法）
            ...mapState({sum:'sum',school:'school',subject:'subject'}),
            // 数组写法
            // ...mapState(['sum','school','subject']),

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