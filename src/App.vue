<template>
  <div id="app">
    <layout v-if="isLogin"></layout>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue"
export default {
  components: {Layout},
  data: function () {
    return {
      isLogin: false,
    }
  }
}
</script>

<style scoped>

</style>
