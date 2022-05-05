<template>
    <div class="school">
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
    </div>
</template>

<script>

    export default {
        name:'School',
        data() {
            return {
                name:'北京大学',
                address:'北京'
            }
        },
        methods: {
            demo(data){
                console.log('我是school组件，我收到了student的数据',data);
            }  
        },
        mounted() {
            this.$bus.$on('hello',this.demo)
        },
        beforeDestroy(){
            this.$bus.$off('hello')
        }
           
    }
</script>

<style scoped>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>