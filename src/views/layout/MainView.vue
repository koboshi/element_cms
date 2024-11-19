<template>
    <el-container class="main-container">
      <el-header>
        <!--头部导航begin-->
        <top-menu></top-menu>
        <!--头部导航end-->
      </el-header>
      <el-container>
        <el-aside width="15%">
          <!--左侧菜单begin-->
          <left-menu></left-menu>
          <!--左侧菜单end-->
        </el-aside>
        <el-container>
          <el-main>
            <!--主体内容begin-->
            <el-row>
              <el-col>
                <!--头部面包屑begin-->
                <breadcrumb></breadcrumb>
                <!--头部面包屑end-->
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <router-view></router-view>
              </el-col>
            </el-row>
            <!--主体内容end-->
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";
import LeftMenu from "./components/LeftMenu.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {Footer, Breadcrumb, LeftMenu, TopMenu},
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
