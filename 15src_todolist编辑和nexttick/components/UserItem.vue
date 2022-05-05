<template>
    <li>
        <label>
            <input type="checkbox"  
            :checked="todo.done"
            @change="handleCheck(todo.id)"
            />
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            v-show="todo.isEdit" 
            type="text" 
            :value="todo.title"
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'UserItem',
        // 声明接收todo对象
        props:['todo'],
        methods:{
            handleCheck(id){
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo',id)
                // 发布订阅方式传递给APP要删除的id
                pubsub.publish('deleteTodo',id)
            }, 
            // 编辑按钮
            handleEdit(todo){
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                }
                else{
                    this.$set(todo,'isEdit',true)
                }
                //nexttick 在下一次更新dom后执行下面的两行
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
                
            },
            // 失去焦点回调，这是真正执行修改逻辑
            handleBlur(todo,e){
                todo.isEdit = false
                if (!e.target.value.trim()) 
                    return alert('输入为空')
                
                    this.$bus.$emit('updateTodo',todo.id,e.target.value)
                
                
            }  
        },
       
    }
</script>

<style scoped>
/*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: rgba(99, 228, 59, 0.7);
    }
    li:hover button{
        display: block;
    }
</style>