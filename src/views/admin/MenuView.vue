<script setup>

import ListPager from "~/components/ListPager.vue";
</script>

<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="22">
        <!--创建按钮begin-->
        <el-button size="medium" icon="el-icon-plus" type="success" @click="addBtnHandler">新建菜单</el-button>
        <!--创建按钮end-->
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="data-box">
          <!--数据表格begin-->
          <el-table v-loading="tableDataLoading" border stripe :data="menusData">
            <el-table-column prop="menu_id" label="菜单ID"></el-table-column>
            <el-table-column prop="parent_id" label="父ID"></el-table-column>
            <el-table-column prop="name" label="菜单名"></el-table-column>
            <el-table-column prop="route_name" label="路由名"></el-table-column>
            <el-table-column prop="deleted" label="生效状态"></el-table-column>
            <el-table-column prop="add_time" label="创建时间"></el-table-column>
            <el-table-column prop="edit_time" label="编辑时间"></el-table-column>
            <el-table-column prop="editor" label="最近编辑人"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!--编辑按钮begin-->
                <el-button @click="editBtnHandler(scope.row.menu_id)" icon="el-icon-edit" circle></el-button>
                <!--编辑按钮end-->
                <!--删除按钮begin-->
                <el-popconfirm @confirm="delBtnHandler(scope.row.menu_id)" :title="'确认删除菜单: ' + scope.row.name + '(' + scope.row.route_name + ')' + ' 吗?'">
                  <el-button slot="reference" type="danger" icon="el-icon-delete" circle></el-button>
                </el-popconfirm>
                <!--删除按钮end-->
              </template>
            </el-table-column>
          </el-table>
          <!--数据表格end-->
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!--分页begin-->
        <list-pager
            :cur-page="curPage"
            :page-size="pageSize"
            :total-count="totalCount" @current-change="curPageChangeHandler"></list-pager>
        <!--分页end-->
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.keyword-input {
  width: 300px;
}
.data-box {
  margin-top: 20px;
}
</style>