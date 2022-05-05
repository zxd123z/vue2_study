<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="forward">前进</button>
            <button @click="back">后退</button>
            <button @click="go">go</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods: {
        back(){
            // 后退
           this.$router.back() 
        },
        forward(){
            // 前进
            this.$router.forward()
        },
        go(){
            this.$router.go(2) //正数是前进步数，负数是后退步数
        }
    },
}
</script>

<style>

</style>