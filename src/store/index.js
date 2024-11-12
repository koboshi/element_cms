import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        login: function(state) {
            state.isAuthenticated = true
        },
        logout: function(state) {
            state.isAuthenticated = false
        }
    }
})
export default store