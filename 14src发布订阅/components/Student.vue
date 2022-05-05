<template>
    <div class="school">
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
       <button @click="sendStudentName">把名字传给学校</button>
    </div>
</template>

<script>
    // 引入消息订阅插件
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                // 提供订阅（发布订阅）
                pubsub.publish('hello',this.name)
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


