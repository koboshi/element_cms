<script>
import LeftMenuItem from "./LeftMenuItem.vue";
import Menu from  "~/model/menu"
export default {
  components: {LeftMenuItem},
  data: function () {
    return {
      menuItems: null
    }
  },
  computed: {
    menuActiveIndex: function() {
      return this.$store.state.activeTab
    }
  },
  created: function() {
    Menu.tree((response) => {
      this.menuItems = response.data.data
      // this.menuActiveIndex = response.data.data.length ? response.data.data[0].menu_id.toString() : '1'
    }, (response, error) => {
      console.log('l-menu render')
      console.log(error)
      this.menu = []
      this.$alert('菜单加载失败')
    })
  },
  methods: {
    menuSelectHandler(key, keyPath) {
      this.$store.commit('setActiveTab', {activeTab: key})
    },
    menuOpenHandler(key, keyPath) {
      //todo
    },
    menuCloseHandler(key, keyPath) {
      //todo
    }
  }
}
</script>

<template>
  <el-menu class="left-menu" :default-active="menuActiveIndex" @select="menuSelectHandler" @open="menuOpenHandler" @close="menuCloseHandler">
    <left-menu-item :menus="menuItems"></left-menu-item>
  </el-menu>
</template>

<style scoped>
.left-menu {
  height:100%
}
</style>