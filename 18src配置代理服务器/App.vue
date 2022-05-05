<template>
  <div id="root">
   <button @click="getStudentMsg">获取学生信息</button>
   <button @click="getCarsMsg">获取汽车信息</button>
  </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods: {
          getStudentMsg(){
            axios.get('http://localhost:8080/api1/students').then(
              response => {
                console.log('请求成功',response.data);
              },
              error => {
                console.log('请求失败',error.message);
              }
            )
          },
          getCarsMsg(){
            axios.get('http://localhost:8080/api2/cars').then(
              response => {
                console.log('请求成功',response.data);
              },
              error => {
                console.log('请求失败',error.message);
              }
            )
          }
        },
      }
</script>
<style>
  
</style>