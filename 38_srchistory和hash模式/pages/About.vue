<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      
    },
    // 通过路由规则，进入该组件时被调用
   beforeRouteEnter (to, from, next) {
     console.log('来自与',to,'去往',from);
      if (to.meta.isAuth) {
        // 判断localstorage里是否有这个信息
        if (localStorage.getItem('name') === 'zhang') {
            next()
        }else{
            console.log('无权限');
        }
    }else{
        next() //放行，进行下一步跳转
    }
   }
}
</script>

