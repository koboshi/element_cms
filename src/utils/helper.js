import CookieStorage from "~/utils/storage";

const Helper = {
    isLogin: function() {
        return !!this.getLoginInfo()
    },
    getLoginInfo: function() {
        let uid = CookieStorage.get('uid', 0)
        let ticket = CookieStorage.get('ticket', '')
        let username = CookieStorage.get('username', '')
        if (uid != 0 && ticket != '') {
            return {
                uid: uid,
                ticket: ticket,
                username: username
            }
        }
        return null
    },
    capitalizeFirstLetter: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
export default Helper