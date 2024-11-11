<script>
export default {
  data: function() {
    return {
      test: 'hello world'
    }
  },
  methods: {
    aboutClickHandle (e) {
      if (this.$route.name !== 'about') {
        this.$router.push({name:'about'})
      }
    },
    contactClickHandle (e) {
      if (this.$route.name !== 'contact_us') {
        this.$router.push({name:'contact_us'})
      }
    }
  }
}
</script>

<template>
  <div>
    {{test}}
<!--    <el-link :to="{name: 'about'}" type="info">关于</el-link>-->
    <el-link @click.prevent="aboutClickHandle" type="info">关于</el-link>
    <el-link @click.prevent="contact_us" type="info">联系我们</el-link>
  </div>
</template>

<style scoped>

</style>