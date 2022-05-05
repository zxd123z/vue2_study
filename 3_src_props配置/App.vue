<template>
  <div>
    <Student name="李四" sex="女" :age="19"/> 
    <hr>
    
  </div>
</template>

<script>
    import Student from './components/Student'


    export default {
        name:'App',
        components:{
            Student
        },
    }
</script>

