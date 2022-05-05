<template>
  <div id="app">
    <div class="container">
        <search/>
        <List/>
    </div>
  </div>

</template>

<script>
    import Search from './components/Search'
    import List from './components/List'
    // import axios from 'axios'
    export default {
        name:'App',
        components:{
                Search,
                List  
        }
        
      }
</script>
<style>
 
</style>