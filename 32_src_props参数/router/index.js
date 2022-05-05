// 创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:guanyu,
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[ 
                //children不加/
                {
                path:'news',
                component:News, 
                },
                {
                path:'message',
                component:Message,
                children:[
                    {
                        name:xiangqing,
                        path:'detail/:id/:title', //这样写为了用占位符声明接收params参数
                        component:Detail, 
                        // props的第一种写法，值为对象，该对象中的所有key-value值以props的形式传给对应组件
                        // props:{id:'001',title:'你好'}
                        // 第二种写法，值为布尔值，为真，则把该路由组件收到的所有params参数，以props的形式传给对应组件
                        props:true
                        // 第三种写法，值为函数，可以接query参数传的数据
                        // props($route){
                        //     return{
                        //         id:$route.query.id,
                        //         title:$route.query.title
                        //     }
                        // }
                    }
                ]  
                }
            ]
        }
    ]
})