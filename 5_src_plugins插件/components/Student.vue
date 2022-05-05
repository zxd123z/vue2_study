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

<style>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>