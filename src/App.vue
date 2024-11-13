<template>
  <div id="app">
    <main-view v-if="isAuthenticated"></main-view>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import MainView from "./views/layout/MainView.vue"
export default {
  components: {MainView},
  data: function () {
    return {
      //isAuthenticated: this.$store.state.isAuthenticated,
    }
  },
  computed: {
    isAuthenticated: function () {
      return this.$store.state.isAuthenticated
    }
  }
}
</script>

<style scoped>

</style>
