<template>
    <div>
        <button @click="isShow = !isShow">点击显示隐藏</button>
        <transition :appear="true" name="yidong"> 
            <h2 v-show="isShow">{{msg}}</h2>
        </transition>
        
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
    /* transition如果有name，那就不是v-enter-active了 */
    .yidong-enter-active{
        animation: yidong 1s linear;
    }
    .yidong-leave-active{
        animation: yidong 1s linear reverse;
    }

    @keyframes yidong {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>