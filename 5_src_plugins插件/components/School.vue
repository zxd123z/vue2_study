<template>
    <div class="school">
        <h2 @click="show">{{name}}</h2>
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
       
    }
</script>

<style>
    .school{
        background-color: rgba(132, 236, 67, 0.67);
    }

</style>