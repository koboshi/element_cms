import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ContactUsView from "../views/ContactUsView.vue"
import MsgCenterView from "../views/MsgCenterView.vue"
import LoginView from "../views/LoginView.vue"
import DefaultView from "../views/layout/DefaultView.vue"

const AdminIndexView = () => import(/* webpackChunkName: "view-admin" */ '../views/admin/IndexView.vue')
const AdminInfoView = () => import(/* webpackChunkName: "view-admin" */ '../views/admin/InfoView.vue')
const AdminChangePswView = () => import(/* webpackChunkName: "view-admin" */ '../views/admin/ChangePswView.vue')

//商品相关视图懒加载
const GoodsIndexView = () => import(/* webpackChunkName: "view-goods" */ '../views/goods/IndexView.vue')
const GoodsListView = () => import(/* webpackChunkName: "view-goods" */ '../views/goods/ListView.vue')

//订单相关视图懒加载
const OrderIndexView = () => import(/* webpackChunkName: "view-order" */ '../views/order/IndexView.vue')
const OrderRevenueView = () => import(/* webpackChunkName: "view-order" */ '../views/order/RevenueView.vue')
const OrderReportView = () => import(/* webpackChunkName: "view-order" */ '../views/order/ReportView.vue')
const OrderListView = () => import(/* webpackChunkName: "view-order" */ '../views/order/ListView.vue')

//用户相关视图懒加载
const UserIndexView = () => import(/* webpackChunkName: "view-user" */ '../views/user/IndexView.vue')
const UserListView = () => import(/* webpackChunkName: "view-user" */ '../views/user/ListView.vue')
const UserDauView = () => import(/* webpackChunkName: "view-user" */ '../views/user/DauView.vue')
const UserMauView = () => import(/* webpackChunkName: "view-user" */ '../views/user/MauView.vue')
const UserArpuView = () => import(/* webpackChunkName: "view-user" */ '../views/user/ArpuView.vue')

Vue.use(VueRouter);

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
            component:AdminInfoView
        },{
            path: 'change-psw',
            name: 'admin_change_psw',
            meta: {name:'修改密码'},
            component:AdminChangePswView
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
            component:GoodsListView
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
            component:OrderReportView
        },{
            path: 'revenue-report',
            name: 'revenue_report',
            meta: {name:'营收报表'},
            component:OrderRevenueView
        },{
            path: 'list',
            name: 'order_list',
            meta: {name:'订单管理'},
            component:OrderListView
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
            component:UserListView
        },{
            path: 'mau-report',
            name: 'mau_report',
            meta: {name:'MAU报表'},
            component:UserMauView
        },{
            path: 'dau-report',
            name: 'dau_report',
            meta: {name:'DAU报表'},
            component:UserDauView
        },{
            path: 'arpu-report',
            name: 'arpu_report',
            meta: {name:'ARPU报表'},
            component:UserArpuView
        }]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes: routes
})

export default router;