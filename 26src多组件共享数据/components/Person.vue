<template>
    <div>
        <h3>当前的和为：{{sum}}</h3>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
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
        ...mapState(['personList','sum']),
        
    },
    methods: {
        // 点击添加人
       add(){
        //    定义一个人的对象
           const personObj = {id:nanoid(),name:this.name}
           console.log(personObj);
        //    通过commit修改state的数据
           this.$store.commit('ADD_PERSON',personObj)
        //    清空输入框
           this.name = ''
       }
    },
}
</script>

<style>

</style>