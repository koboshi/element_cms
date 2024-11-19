import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/common/AboutView.vue"
import ContactUsView from "../views/common/ContactUsView.vue"
import MsgCenterView from "../views/MsgCenterView.vue"
import LoginView from "../views/LoginView.vue"
import DefaultView from "../views/layout/TransparentView.vue"
import {SYSTEM_CONFIG} from "~/config"
import Helper from '~/utils/helper'


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
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
})

//导航守卫设定
router.beforeEach(function(to, from, next) {
    let flag = Helper.isLogin()
    if (SYSTEM_CONFIG.NO_AUTH_ROUTE.includes(to.name)) {
        //若目标位置是免认证，则无条件允许
        next()
    }else if (to.name !== SYSTEM_CONFIG.LOGIN_ROUTE && !flag) {
        //若当前位置不属于免认证，未登录不允许去login以外的地方
        next({name: SYSTEM_CONFIG.LOGIN_ROUTE})
    }else if (to.name === SYSTEM_CONFIG.LOGIN_ROUTE && flag) {
        //登陆后不允许再去login，强行跳转首页
        next({name: SYSTEM_CONFIG.HOME_ROUTE})
    }else {
        //目标位置不是免认证，当前已登录 or 未登录但不访问login
        next()
    }
})

export default router;