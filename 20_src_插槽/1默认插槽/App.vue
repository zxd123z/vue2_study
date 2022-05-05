<template>
  <div id="app">
    <div class="container">
        <Category :listData="foods" title="美食">
            <img src="" alt="">
        </Category>
        <Category :listData="games" title="游戏">
          <ul>
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
          
        </ul>
        </Category>
        <Category :listData="films" title="电影">
          <video src=""></video>
        </Category>
    </div>
  </div>

</template>

<script>
    
    import Category from './components/Category'
    export default {
        name:'App',
        components:{
              Category  
        },
        data() {
          return {
            
            foods:['火锅','牛排','小龙虾','烧烤'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['战狼','哈哈','教父','你好李焕英']
          }
        },
        
      }
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>