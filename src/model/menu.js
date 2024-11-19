import Request from "~/utils/request";
import router from "~/router"
import Helper from "~/utils/helper";

const _configRoute = function(parentRouteName, routeList) {
    for (let index in routeList) {
        let routeInfo = routeList[index]
        _addRoute(parentRouteName, routeInfo)
        //配置路由
        if (routeInfo.children && routeInfo.children.length > 0) {
            //递归处理子路由
            _configRoute(routeInfo.route_name, routeInfo.children)
        }
    }
}

const _addRoute = function(parentRouteName, routeInfo) {
    let hasChildren = routeInfo.children && routeInfo.children.length > 0
    let routeConfig = {}
    routeConfig.path = routeInfo.route_name.replace('_', '-')
    routeConfig.name = routeInfo.route_name
    routeConfig.meta = {name: routeInfo.name}
    if (hasChildren) {
        routeConfig.component = () => import(/* webpackChunkName: "view-common" */ '~/views/layout/TransparentView.vue')
        if (parentRouteName) {
            router.addRoute(parentRouteName, routeConfig)
        }else{
            router.addRoute(routeConfig)
        }
    }else {
        let viewPath = _getViewPath(routeConfig.name)
        routeConfig.component = () => import(/* webpackChunkName: "view-common" */ '~/views/' + viewPath + 'View.vue')

        router.addRoute(parentRouteName, routeConfig)
    }
}

const _getViewPath = function(routeName) {
    let tmp = []
    let routeInfoArr = routeName.split('_')
    for (let index in routeInfoArr) {
        let path = routeInfoArr[index]
        //只有最后一个元素首字母大写
        if ((parseInt(index) + 1) === routeInfoArr.length) {
            tmp[index] = Helper.capitalizeFirstLetter(path)
        }else {
            tmp[index] = path
        }
    }
    return tmp.join('/')
}

const Menu = {
    tree: function(successCallback, errorCallback) {
        Request.post('/menu/tree').then(function(response) {
            if (response.data.error_code == 0) {
                successCallback && successCallback(response)
                //动态加载路由
                let routeList = response.data.data
                _configRoute(null, routeList)
            }else {
                errorCallback && errorCallback(response, null)
            }
        }).catch(function(error) {
            errorCallback && errorCallback(null, error)
        })
    },
}

export default Menu