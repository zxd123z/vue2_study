<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center">我是一个具名插槽，等着组件的使用者进行填充</slot>
        <slot name="footer">我也是一个具名插槽，等着name=footer的组件填上</slot>
    </div>

</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
        return {
            
        }
    },

}
</script>

<style>
    .category{
        background-color: aqua;
        width: 200px;
        height: 300px;

    }
    h3{
        text-align: center;
        background-color: bisque;
    }
    video{
        width: 100%;
    }
    img{
        width: 100%;
    }
</style>