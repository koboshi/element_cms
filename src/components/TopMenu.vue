<script>
import {SYSTEM_CONFIG} from "~/config"

export default {
  data: function () {
    return {
      logoutVisible: false,
      loginInfo: {
        userId: 1,
        userName:'koboshi'
      }
    }
  },
  computed: {
    menuActiveIndex: function () {
      return this.$route.name
    }
  },
  methods: {
    menuItemClickHandle(e) {
      console.log(e.$attrs.route_name)
      if (this.$route.name !== e.$attrs.route_name) {
        this.$router.push({name:e.$attrs.route_name})
      }
    },
    logoutClickHandle(e) {
      console.log('logout dialog call')
      this.logoutVisible = true
    },
    logoutConfirmHandle(e) {
      console.log('logout...')
      this.logoutVisible = false
      this.$store.commit('logout')
      this.$router.push(SYSTEM_CONFIG.loginRoute)
      this.$message('已成功登出')
    }
  }
}
</script>

<template>
  <div>
    <!--头部导航begin-->
    <el-menu mode="horizontal" :default-active="menuActiveIndex">
      <el-menu-item @click="menuItemClickHandle" route_name="home" index="home">处理中心</el-menu-item>
      <el-menu-item @click="menuItemClickHandle" route_name="msg_center" index="msg_center">消息中心</el-menu-item>
      <el-submenu index="3">
        <template slot="title">当前用户{{ loginInfo.userName }}</template>
        <el-menu-item @click="menuItemClickHandle" route_name="admin_info" index="admin_info">个人信息</el-menu-item>
        <el-menu-item @click="menuItemClickHandle" route_name="admin_change_psw" index="admin_change_psw">修改密码</el-menu-item>
        <el-menu-item @click="logoutClickHandle" index="logout">登出</el-menu-item>
      </el-submenu>
    </el-menu>
    <!--头部导航end-->

    <!--登出确认面板begin-->
    <el-dialog width="30%" :append-to-body="true" :visible.sync="logoutVisible">
      <template slot="title">
        <i class="el-icon-switch-button"></i>
        <span>提示</span>
      </template>
      <span>是否确认登出？</span>
      <span slot="footer">
        <el-button @click="logoutVisible = false">取 消</el-button>
        <el-button type="warning" @click="logoutConfirmHandle">确 定</el-button>
      </span>
    </el-dialog>
    <!--登出确认面板begin-->
  </div>
</template>

<style scoped>

</style>