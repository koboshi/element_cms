<script>
export default {
  data: function() {
    return {
      //crumbs : this.$route.matched
    }
  },
  computed: {
    midCrumbs: function() {
      console.log('crumb info')
      console.log(this.$route.matched)
      return this.$route.matched.slice(0, -1)
    },
    lastCrumb: function() {
      console.log('lastCrumb info')
      console.log(this.$route.matched[this.$route.matched.length - 1])
      return this.$route.matched[this.$route.matched.length - 1]
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
  <div class="breadcrumb-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{name:'home'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(crumb, index) in midCrumbs" :to="crumb.name" :key="index">{{ crumb.meta.name }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ lastCrumb.meta.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
<!--    <el-button @click="testBtnHanle">测试</el-button>-->
  </div>
</template>

<style scoped>
.breadcrumb-box {
  //margin-bottom: 20px;
  //padding-bottom: 20px;
  //border-bottom: 1px solid #d7dae2;
  //border-radius: 4px;
}
</style>