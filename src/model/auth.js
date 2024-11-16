import Request from "~/utils/request";
import CookieStorage from "~/utils/storage";
import store from "~/store";

const Auth = {
    login: function (username, password, successCallback, errorCallback) {
        username = username.trim()
        password = password.trim()
        Request.post('/login', {
            username: username,
            password: password
        }).then(function (response) {
            if (response.data.error_code == 0) {
                let resData = response.data.data
                let uid = resData.uid
                let ticket = resData.ticket
                let username = resData.username
                CookieStorage.set('uid', uid, 1)
                CookieStorage.set('ticket', ticket, 1)
                CookieStorage.set('username', username, 1)
                successCallback && successCallback(response)
            }else {
                errorCallback && errorCallback(response, null)
            }
        }).catch(function (error) {
            errorCallback && errorCallback(null, error)
        })
    },
    logout: function(successCallback, errorCallback) {
        let uid = CookieStorage.get('uid', 0)
        let ticket = CookieStorage.get('ticket', '')
        Request.post('/logout', {
            uid: uid,
            ticket: ticket
        }).then(function(response) {
            if (response.data.error_code == 0) {
                CookieStorage.del('uid')
                CookieStorage.del('ticket')
                CookieStorage.del('username')
                successCallback && successCallback(response)
            }else {
                errorCallback && errorCallback(response, null)
            }
        }).catch(function(error) {
            errorCallback && errorCallback(null, error)
        })
    },
    verify: function(successCallback, errorCallback) {
        let uid = CookieStorage.get('uid', 0)
        let ticket = CookieStorage.get('ticket', '')
        Request.post('/verify', {
            uid: uid,
            ticket: ticket
        }).then(function(response) {
            if (response.data.error_code == 0) {
                successCallback && successCallback(response)
            }else {
                errorCallback && errorCallback(response, null)
            }
        }).catch(function(error) {
            errorCallback && errorCallback(null, error)
        })
    }
}

export default Auth