<script>
import LeftMenuItem from "./LeftMenuItem.vue";
export default {
  components: {LeftMenuItem},
  data: function () {
    return {
      menuActiveIndex: '1',
      menuItems: [
        {id: '1', name: '商品管理', route_name: 'goods_list'},
        {id: '2', name: '订单', route_name: 'order', children: [
            {id: '3', name: '订单报表', route_name: 'order_report'},
            {id: '4', name: '营收报表', route_name: 'revenue_report'},
            {id: '5', name: '订单管理', route_name: 'order_list'},
          ]
        },
        {id: '6', name: '用户', route_name: 'user', children: [
            {id: '7', name: '报表相关', route_name: 'user_report', children: [
                {id: '8', name: 'DAU报表', route_name: 'dau_report'},
                {id: '9', name: 'MAU报表', route_name: 'mau_report'},
                {id: '10', name: 'ARPU报表', route_name: 'arpu_report'},
              ]
            },
            {id: '11', name: '用户管理', route_name: 'user_list'},
          ]
        }
      ]
    }
  },
  methods: {
    menuSelectHanle(key, keyPath) {
      console.log('left menu select')
      console.log('key:' , key)
      console.log('keyPath:' , keyPath)
    },
    menuOpenHandle(key, keyPath) {
      console.log('left menu open')
      console.log('key:' , key)
      console.log('keyPath:' , keyPath)
    },
    menuCloseHandle(key, keyPath) {
      console.log('left menu close')
      console.log('key:' , key)
      console.log('keyPath:' , keyPath)
    }
  }
}
</script>

<template>
  <el-menu class="left-menu" :default-active="menuActiveIndex" @select="menuSelectHanle" @open="menuOpenHandle" @close="menuCloseHandle">
    <left-menu-item :menus="menuItems"></left-menu-item>
<!--    <el-menu-item index="1">菜单1</el-menu-item>-->
<!--    <el-submenu index="2">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span>菜单组2</span>-->
<!--      </template>-->
<!--      <el-menu-item-group>-->
<!--        <template slot="title">菜单组2-1</template>-->
<!--        <el-menu-item index="2-1-1">菜单2-1-1</el-menu-item>-->
<!--        <el-menu-item index="2-1-2">菜单2-1-2</el-menu-item>-->
<!--        <el-menu-item index="2-1-3">菜单2-1-3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group>-->
<!--        <template slot="title">菜单组2-2</template>-->
<!--        <el-menu-item index="2-2-1">菜单2-2-1</el-menu-item>-->
<!--        <el-menu-item index="2-2-2">菜单2-2-2</el-menu-item>-->
<!--        <el-menu-item index="2-2-3">菜单2-2-3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--    </el-submenu>-->
<!--    <el-menu-item index="3">菜单3</el-menu-item>-->
<!--    <el-menu-item index="4">菜单4</el-menu-item>-->
<!--    <el-submenu index="5">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span>菜单组5</span>-->
<!--      </template>-->
<!--      <el-menu-item index="5-1">菜单5-1</el-menu-item>-->
<!--      <el-menu-item index="5-2">菜单5-2</el-menu-item>-->
<!--      <el-menu-item index="5-3">菜单5-3</el-menu-item>-->
<!--      <el-submenu index="5-4">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-menu"></i>-->
<!--          <span>菜单组5-4</span>-->
<!--        </template>-->
<!--        <el-menu-item index="5-4-1">菜单5-4-1</el-menu-item>-->
<!--        <el-menu-item index="5-4-2">菜单5-4-2</el-menu-item>-->
<!--      </el-submenu>-->
<!--    </el-submenu>-->
  </el-menu>
</template>

<style scoped>
.left-menu {
  height:100%
}
</style>