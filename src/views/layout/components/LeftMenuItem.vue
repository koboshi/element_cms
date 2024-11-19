<script>
export default {
  name: 'LeftMenuItem',
  props: {
    menus: {
      type: Array
    }
  },
  methods: {
    menuItemClickHandle(e) {
      if (this.$route.name !== e.$attrs.route_name) {
        this.$router.push({name:e.$attrs.route_name})
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">

      <el-submenu v-if="menu.children && menu.children.length > 0" :index="menu.route_name">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{menu.name}}</span>
        </template>
        <!--递归调用自身begin-->
        <left-menu-item :menus="menu.children"></left-menu-item>
        <!--递归调用自身end-->
      </el-submenu>

      <div v-else>
        <el-menu-item @click="menuItemClickHandle" :route_name="menu.route_name" :index="menu.route_name">{{menu.name}}</el-menu-item>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>