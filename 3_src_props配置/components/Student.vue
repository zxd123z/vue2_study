<template>
    <div class="school">
        <h1>{{msg}}</h1>
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
        <h2>{{age+1}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                msg:'hello',
                
            }
        },
        //简单声明接收
        props:['name','sex','age'] 

        // 接收同时对数据进行类型的限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        // 接收同时对数据进行类型限制+默认值的指定+必要性的限制
        // props:{
        //     name:{
        //         type:String, //类型
        //         required:true //规定这个数据是必要的
        //     },
        //     age:{
        //         type:Number,
        //         default:88 // 默认值，不与required同时存在
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // }
    }
</script>

<style>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>