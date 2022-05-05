<template>
    <div class="school">
        <h2 @click="show">{{name}}</h2>
        <h2>{{address}}</h2>
       
    </div>
</template>

<script>
    //引入一个混合，组件共同的东西，出去单独写了
    import { mixin } from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:'北京大学',
                address:'北京'
            }
        },
        // 局部混合
        mixins:[mixin]
        
    }
</script>

<style>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>