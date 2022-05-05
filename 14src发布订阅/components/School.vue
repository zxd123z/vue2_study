<template>
    <div class="school">
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
    </div>
</template>

<script>
    // 引入消息订阅插件
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data() {
            return {
                name:'北京大学',
                address:'北京'
            }
        },
        methods: {
            // 消息订阅的回调函数
            demo(msgname,data){
                console.log('我是school组件，我收到了消息订阅',data);
            }  
        },
        mounted() {
            // 开始订阅
            this.pubsubId = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy(){
            // 销毁订阅
            pubsub.unsubscribe(this.pubsubId)
        }
           
    }
</script>

<style scoped>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>