export const SYSTEM_CONFIG = {
    //不需要校验权限的路由
    noAuthRoute: [
        //'login'
    ],
    homeRoute: 'home',
    //认证入口
    loginRoute: 'login',
    //取消认证入口
    logoutRoute: 'logout',
}

//默认登陆账号（mock，用于无后端测试）
export const DEFAULT_ACCOUNT = {
    username: 'koboshi',
    password: '802927'
}