// 创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创建一个路由器
const router = new VueRouter({
    mode:'hash', //配置路由器工作模式 hash或者history hash显示#，不美观但是兼容性较好。 history不显示#，但是兼容性较差，需要后端人员支持解决上线404问题
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
            // 自定义的属性写在这里面
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[ 
                //children不加/
                {
                    name:'xinwen',
                    path:'news',
                    component:News, 
                    meta:{isAuth:true, title:'新闻'},
                   
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                    {
                        name:'xiangqing',
                        path:'detail/:id/:title', //这样写为了用占位符声明接收params参数
                        component:Detail, 
                        props:true
                    }
                ]  
                }
            ]
        }
    ]
})
// // 全局前置路由守卫，初始化的时候被调用和每次切换路由之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守卫');
//     // 判断是否需要鉴权
//     if (to.meta.isAuth) {
//         // 判断localstorage里是否有这个信息
//         if (localStorage.getItem('name') === 'zhang') {
//             next()
//         }else{
//             console.log('无权限');
//         }
//     }else{
//         next() //放行，进行下一步跳转
//     }
// })
// 全局后置路由守卫，初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',from);
    document.title = to.meta.title || '练习' //修改网页名字
})

export default router //最后暴露