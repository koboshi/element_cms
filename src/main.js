import Vue from 'vue'
import store from "./store"
import router from './router'
import './plugins/element'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App),
  store: store,
  router: router
})