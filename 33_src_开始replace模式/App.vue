<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- vue中借助router-link实现路由切换 -->
          <router-link :replace="true" class="list-group-item" active-class="active"  :to="{name:'guanyu'}">About</router-link>
          <!-- replace开始替换当前的（上一条）历史记录模式，默认是push（追加历史记录） replace是简写 -->
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    
  import Banner from './components/Banner'
    export default {
        name:'App',
       components:{
         Banner
       }        
    }
</script>

</style>