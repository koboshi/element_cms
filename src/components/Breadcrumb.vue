<script>
export default {
  data: function() {
    return {
      //crumbs : this.$route.matched
    }
  },
  computed: {
    crumbs: function() {
      return this.$route.matched
    }
  },
  methods: {
    testBtnHanle() {
      console.log(this.$route.matched)
    }
  }
}
</script>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(crumb, index) in crumbs" :key="index">{{ crumb.meta.name }}</el-breadcrumb-item>
    </el-breadcrumb>

<!--    <el-button @click="testBtnHanle">测试</el-button>-->
  </div>
</template>

<style scoped>

</style>