<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <UserHeader @addTodo="addTodo"/>
        <UserList :todos="todos" />
        <UserFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>

</template>

<script>
    import UserHeader from './components/UserHeader'
    import UserList from './components/UserList'
    import UserFooter from './components/UserFooter'
    

    export default {
        name:'App',
        components:{
           UserHeader,
           UserList,
           UserFooter
        },
        data(){
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods:{
          // 添加待办事项
          addTodo(todoobj){
             this.todos.unshift(todoobj)
          },
          checkTodo(id){
              this.todos.forEach((todo)=>{
                  if (todo.id === id) {
                    todo.done = !todo.done
                  }
              })
          },
          deleteTodo(id){
            this.todos = this.todos.filter(todo => 
               todo.id !== id
            )
          },
          // 全选或取消全选功能
          checkAllTodo(done){
             this.todos.forEach((todo)=>{
                todo.done = done
            })
          },
          clearAllTodo(){
           this.todos = this.todos.filter((todo)=>{
             return !todo.done
           })
          }
        },
        watch:{
          todos:{
            deep:true, //开启深度监视
            handler(value){
              localStorage.setItem('todos',JSON.stringify(value))
            }
          }
        },
        mounted() {
          // 全局事件总线方式绑定自定义组件
          this.$bus.$on('checkTodo',this.checkTodo)
          this.$bus.$on('deleteTodo',this.deleteTodo)
        },
        beforeDestroy(){
          // 销毁
          this.$bus.$off('checkTodo','deleteTodo')
        },
  }        
</script>
<style>
    /*base*/
    body {
      background: #fff;
    }
    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }
    .btn:focus {
      outline: none;
    }
    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>