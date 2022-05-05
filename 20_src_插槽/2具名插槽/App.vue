<template>
  <div id="app">
    <div class="container">
        <Category  title="美食">
            <img src="" alt="">
        </Category>
        <Category  title="游戏">
          <ul slot="center">
            <li v-for="(g,index) in listData" :key="index">{{g}}</li>
          </ul>
          <div class="foot" slot="footer">
            <a href="http://www.atguigu.com">单机游戏</a>
            <a href="http://www.atguigu.com">网络游戏</a>
          </div>
        </Category>
        <Category  title="电影">
          <video src="" slot="center"></video>
          <template v-slot:footer>
            <div class="foot">
              <a href="http://www.atguigu.com">经典</a>
              <a href="http://www.atguigu.com">热门</a>
              <a href="http://www.atguigu.com">推荐</a>
            </div>
            <h4>欢迎来观影</h4>
          </template>
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
<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>