<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" 
        placeholder="enter the name you search"
        v-model=" keyWords"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyWords:''
            }
        },
        methods: {
            searchUsers(){
                this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('获取成功')
                        // 请求后更新数据
                        this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error => {
                        // 请求后更新数据
                        this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        },
    }
</script>

<style>

</style>