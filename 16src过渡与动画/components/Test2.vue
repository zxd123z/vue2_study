<template>
    <div>
        <button @click="isShow = !isShow">点击显示隐藏</button>
        <!-- <transition :appear="true" name="hello"> 
            <h2 v-show="isShow">{{msg}}</h2>
        </transition> -->
        <hr>
        <!-- group里面的需要加key -->
        <transition-group name="hello" appear>
            <h2 v-show="!isShow" key="1">1{{msg}}</h2>
            <h2 v-show="isShow" key="2">2{{msg}}</h2>
        </transition-group>
        
    </div>
    
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            msg:'你好',
            isShow:true
        }
    },

}
</script>

<style scoped>
    h2{
        background-color: orange;
        
    }
    /* 进入的起点和 离开的终点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的过程中和离开的过程中 */
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点 和离开的起点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
   
</style>