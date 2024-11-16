import Cookies from 'js-cookie'
import {SYSTEM_CONFIG} from "~/config";

const CookieStorage = {
    set: function (name, value, expires = 1) {
        name = SYSTEM_CONFIG.COOKIE_PREFIX + '_' + name
        Cookies.set(name, value, {expires: expires, path: '/'})
    },
    get: function(name, def = null) {
        name = SYSTEM_CONFIG.COOKIE_PREFIX + '_' + name
        let value = Cookies.get(name)
        return value ? value : def
    },
    del: function(name) {
        name = SYSTEM_CONFIG.COOKIE_PREFIX + '_' + name
        Cookies.remove(name)
    }
}

export default CookieStorage