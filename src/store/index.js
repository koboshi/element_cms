import Vue from 'vue'
import Vuex from 'vuex'
import CookieStorage from "~/utils/storage";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loginInfo: null,
        isLogin: false
    },
    getters: {
        loginInfo: (state) => {
            return state.loginInfo
        },
        isLogin: (state) => {
            return state.isLogin
        }
        // loginInfo: (state) => {
        //     let uid = CookieStorage.get('uid', 0)
        //     let ticket = CookieStorage.get('ticket', '')
        //     let username = CookieStorage.get('username', '')
        //     if (uid != 0 && ticket != '') {
        //         return {
        //             uid: uid,
        //             ticket: ticket,
        //             username: username
        //         }
        //     }
        //     return null
        // },
    },
    mutations: {
        logout: function(state) {
            state.loginInfo = {}
            state.isLogin = false
        },
        login: function(state) {
            let uid = CookieStorage.get('uid', 0)
            let ticket = CookieStorage.get('ticket', '')
            let username = CookieStorage.get('username', '')
            if (uid != 0 && ticket != '') {
                state.loginInfo = {
                    uid: uid,
                    ticket: ticket,
                    username: username
                }
                state.isLogin = true
            }
            state.loginInfo = {}
            state.isLogin = false
        }
    }
})
export default store