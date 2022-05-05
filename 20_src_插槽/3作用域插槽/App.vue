<template>
  <div id="app">
    <div class="container">
        <Category  title="游戏">
          <!-- es6解构赋值 -->
          <template scope="{games}"> 
            <ul>
              <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
          </template>
        </Category>  
        <Category  title="游戏">
          <template scope="category"> 
            <ol>
              <li v-for="(g,index) in category.games" :key="index">{{g}}</li>
            </ol>
          </template>
        </Category>  
        <Category  title="游戏">
          <template scope="category"> 
           
              <h4 v-for="(g,index) in category.games" :key="index">{{g}}</h4>
          </template>
        </Category>  
    </div>
  </div>
</template>

<script>
    
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        
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