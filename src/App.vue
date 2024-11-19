<template>
  <div id="app">
    <main-view v-if="isLogin"></main-view>
    <transparent-view v-else></transparent-view>
  </div>
</template>

<script>
import MainView from "./views/layout/MainView.vue"
import TransparentView from './views/layout/TransparentView.vue'
import Helper from "~/utils/helper";
export default {
  components: {MainView, TransparentView},
  data: function () {
    return {
      //isAuthenticated: this.$store.state.isAuthenticated,
    }
  },
  computed: {
    isLogin: function () {
      return Helper.isLogin()
    }
  },
  // updated: function() {
  //   console.log('updated trigger')
  //   this.isLogin= Helper.isLogin()
  // },
  methods: {
    // isLogin: function () {
    //   return Helper.isLogin()
    // }
  }
}
</script>

<style scoped>

</style>
