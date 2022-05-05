export default {
    install(){
        // 插件本质是包含install方法的一个对象，install的第一个参数是vue，第二个以后的参数是插件使用者传递的数据
        console.log('@install');
    }
}