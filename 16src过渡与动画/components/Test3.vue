<template>
    <div>
        <button @click="isShow = !isShow">点击显示隐藏</button>
        <transition 
        :appear="true" 
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__bounceOutLeft"
        > 
            <h2 v-show="isShow">{{msg}}</h2>
        </transition>
        
    </div>
    
</template>

<script>
import 'animate.css'
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
        width: 300px;
    }
   
</style>