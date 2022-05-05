<template>
  <div >
    <Count/>
  </div>
</template>

<script>
    
    import Count from './components/Count'
    export default {
        name:'App',
        components:{Count},
        mounted(){
          console.log('app',this);
        }
        
    }
</script>
<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>