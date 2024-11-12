import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        loginInfo: {
            userTicket: '',
            userId : 0,
            userName: '',
        }
    },
    mutations: {
        login: function(state, payload) {
            state.loginInfo.userTicket = payload.userTicket
            state.loginInfo.userId = payload.userId
            state.loginInfo.userName = payload.userName
            state.isAuthenticated = true
        },
        logout: function(state) {
            state.isAuthenticated = false
        }
    }
})
export default store