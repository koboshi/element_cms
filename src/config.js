export const SYSTEM_CONFIG = {
    //不需要校验权限的路由
    NO_AUTH_ROUTE: [
        //'login'
    ],
    HOME_ROUTE: 'home',
    //认证入口
    LOGIN_ROUTE: 'login',
    //取消认证入口
    LOGOUT_ROUTE: 'logout',

    API_BASE_URL: 'http://127.0.0.1:8000/index.php',

    COOKIE_PREFIX: 'epc',
}

//默认登陆账号（mock，用于无后端测试）
export const DEFAULT_ACCOUNT = {
    username: 'koboshi',
    password: '802927'
}