<template>
  <div>
      <School ref="sch"> </School>
      <h1 v-text="msg" ref="titile"></h1>
      <button ref="btn" @click="show">点我</button>
  </div>
</template>

<script>
    import School from './components/School'

    export default {
        name:'App',
        data() {
            return {
                msg:'欢迎你'
            }
        },
        components:{
            School
        },
        methods:{
            show(){
                console.log(this.$refs.title) //真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//school组件的实例对象（vc）
            }
        }

    }
</script>

<style>

</style>