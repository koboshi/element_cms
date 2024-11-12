import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ContactUsView from "../views/ContactUsView.vue"
import MsgCenterView from "../views/MsgCenterView.vue"
import LoginView from "../views/LoginView.vue"
import DefaultView from "../views/layout/DefaultView.vue"
import {SYSTEM_CONFIG} from "../config"
import stroe from "../store"
import store from "../store";


Vue.use(VueRouter);

//路由设定
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {name:'处理中心'},
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        meta: {name:'关于'},
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contact_us',
        meta: {name:'联系我们'},
        component: ContactUsView
    },
    {
        path: '/msg-center',
        name: 'msg_center',
        meta: {name:'信息中心'},
        component: MsgCenterView
    },
    {
        path: '/login',
        name: 'login',
        meta: {name:'登录'},
        component: LoginView,
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {name:'后台管理'},
        component: DefaultView,
        children: [{
            path: 'info',
            name: 'admin_info',
            meta: {name:'个人信息'},
            component:() => import(/* webpackChunkName: "view-admin" */ '../views/admin/InfoView.vue')
        },{
            path: 'change-psw',
            name: 'admin_change_psw',
            meta: {name:'修改密码'},
            component:() => import(/* webpackChunkName: "view-admin" */ '../views/admin/ChangePswView.vue')
        }]
    },
    {
        path: '/goods',
        name: 'goods',
        meta: {name:'商品'},
        component: DefaultView,
        children: [{
            path: 'list',
            name: 'goods_list',
            meta: {name:'商品管理'},
            component:() => import(/* webpackChunkName: "view-goods" */ '../views/goods/ListView.vue')
        }]
    },
    {
        path: '/order',
        name: 'order',
        meta: {name:'订单'},
        component: DefaultView,
        children: [{
            path: 'order-report',
            name: 'order_report',
            meta: {name:'订单列表'},
            component:() => import(/* webpackChunkName: "view-order" */ '../views/order/ReportView.vue')
        },{
            path: 'revenue-report',
            name: 'revenue_report',
            meta: {name:'营收报表'},
            component:() => import(/* webpackChunkName: "view-order" */ '../views/order/RevenueView.vue')
        },{
            path: 'list',
            name: 'order_list',
            meta: {name:'订单管理'},
            component:() => import(/* webpackChunkName: "view-order" */ '../views/order/ListView.vue')
        }]
    },
    {
        path: '/user',
        name: 'user',
        meta: {name:'用户'},
        component: DefaultView,
        children: [{
            path: 'list',
            name: 'user_list',
            meta: {name:'用户管理'},
            component:() => import(/* webpackChunkName: "view-user" */ '../views/user/ListView.vue')
        },{
            path: 'mau-report',
            name: 'mau_report',
            meta: {name:'MAU报表'},
            component:() => import(/* webpackChunkName: "view-user" */ '../views/user/MauView.vue')
        },{
            path: 'dau-report',
            name: 'dau_report',
            meta: {name:'DAU报表'},
            component:() => import(/* webpackChunkName: "view-user" */ '../views/user/DauView.vue')
        },{
            path: 'arpu-report',
            name: 'arpu_report',
            meta: {name:'ARPU报表'},
            component:() => import(/* webpackChunkName: "view-user" */ '../views/user/ArpuView.vue')
        }]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
})

//导航守卫设定
router.beforeEach(function(to, from, next) {
    let isAuthenticated = store.state.isAuthenticated
    if (SYSTEM_CONFIG.noAuthRoute.includes(to.name)) {
        //若目标位置是免认证，则无条件允许
        next()
    }else if (to.name !== SYSTEM_CONFIG.loginRoute && !isAuthenticated) {
        //若当前位置不属于免认证，未登录不允许去login以外的地方
        next({name: SYSTEM_CONFIG.loginRoute})
    }else if (to.name === SYSTEM_CONFIG.loginRoute && isAuthenticated) {
        //登陆后不允许再去login，强行跳转首页
        next({name: 'home'})
    }else {
        //目标位置不是免认证，当前已登录 or 未登录但不访问login
        next()
    }
})

export default router;