<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    beforeDestroy(){
        console.log('内容要被销毁了');
    },
    // 路由专有的钩子函数，用于捕获路由组件的状态
    // 激活
    activated() {
        console.log('news激活了');
    },
    // 失活
    deactivated(){
        console.log('news失活了');
    }
}
</script>

