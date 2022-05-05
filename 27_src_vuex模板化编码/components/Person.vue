<template>
    <div>
        <h3>当前的和为：{{sum}}</h3>
        <h1>人员列表</h1>
        <h3>列表中第一个人的名字是{{firstName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的</button>
        <button @click="addrandom">添加一个随机的</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
  
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        // 利用mapstate读数据
        ...mapState('person',['personList']),
        ...mapState('count',['sum']),
        // 自己直接读取
        firstName(){
            return this.$store.getters['person/firstName']
        }
        
    },
    methods: {
        // 点击添加人
       add(){
        //    定义一个人的对象
           const personObj = {id:nanoid(),name:this.name}
           console.log(personObj);
        //    通过commit修改state的数据
           this.$store.commit('person/ADD_PERSON',personObj)
        //    清空输入框
           this.name = ''
       },
       addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('person/add_wang',personObj)
            this.name=''
       },
       addrandom(){
            this.$store.dispatch('person/add_random')
       }
    },
}
</script>

<style>

</style>