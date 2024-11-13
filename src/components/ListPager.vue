<script>
export default {
  name: "ListPager",
  props: {
    curPage: {
      type: Number,
    },
    pageSize: {
      type: Number,
    },
    totalCount: {
      type: Number,
    }
  }
}
</script>

<template>
  <!--分页begin-->
  <div>
    <el-pagination
        :current-page="curPage"
        :page-size="pageSize"
        :total="totalCount" layout="total, prev, pager, next, jumper"
        @current-change="$emit('current-change', $event)"></el-pagination>
  </div>
  <!--分页end-->
</template>

<style scoped>

</style>