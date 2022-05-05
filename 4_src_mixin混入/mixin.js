// 功能：把多个组件共用的配置提取成一个混入对象

export const mixin = {
    methods:{
        show(){
            alert(this.name)
        }
    },
    data() {
        return {
            x:100,
            y:200
        }
    },
}
// 第一步定义混合，在这个文件上