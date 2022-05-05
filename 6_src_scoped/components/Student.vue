<template>
    <div class="school">
        <h2 @click="show">{{name}}</h2>
        <h2>{{sex}}</h2>
       
    </div>
</template>

<script>

    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
      
        
    }
</script>

<style scoped>
/* 如果与其他组件类名一致会冲突覆盖 ，加上scoped会解决这个问题*/
    .school{
        background-color: rgba(186, 230, 26, 0.67);
    }
</style>


