<template>
    <ul class="todo-main">
        <transition-group 
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInRight"
        leave-active-class="animate__backOutRight"
        >
            <UserItem 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            
            />
        </transition-group>
        
          
    </ul>
</template>

<script>
    import 'animate.css'
    import UserItem from './UserItem'
    export default {
        name:'UserList',
        components:{
            UserItem
        },
        // 把数据引过来
        props:['todos'],
       
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>