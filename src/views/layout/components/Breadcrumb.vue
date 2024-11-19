<script>
export default {
  data: function() {
    return {
      //crumbs : this.$route.matched
    }
  },
  computed: {
    midCrumbs: function() {
      return this.$route.matched.slice(0, -1)
    },
    lastCrumb: function() {
      return this.$route.matched[this.$route.matched.length - 1]
    }
  },
  methods: {
    testBtnHanle() {
    }
  }
}
</script>

<template>
  <div class="breadcrumb-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{name:'home'}">首页</el-breadcrumb-item>
      <template v-if="midCrumbs && midCrumbs.length > 0">
        <el-breadcrumb-item v-for="(crumb, index) in midCrumbs" :to="crumb.name" :key="index">{{ crumb.meta.name }}</el-breadcrumb-item>
      </template>
      <template v-if="lastCrumb">
        <el-breadcrumb-item>{{ lastCrumb.meta.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <el-divider></el-divider>
<!--    <el-button @click="testBtnHanle">测试</el-button>-->
  </div>
</template>

<style scoped>
</style>