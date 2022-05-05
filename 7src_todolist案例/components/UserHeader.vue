<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'UserHeader',
        // 把APP上的方法引过来
        props:['addTodo'],
        data() {
            return {
                title:''
            }
        },
        methods:{
            add() {
                // 判断输入不能为空且去掉前后空格
                if(!this.title.trim()) return alert('输入不能为空')
                // 将用户的输入包装成一个对象
                const todo = {id:nanoid(),title:this.title,done:false}
                // 添加一个todo对象
                this.addTodo(todo)
                // 清空输入框
                this.title=''
            },
            

        },
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

</style>