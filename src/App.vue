<template>
  <div id="app">
    <layout v-if="isAuthenticated"></layout>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue"
export default {
  components: {Layout},
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
