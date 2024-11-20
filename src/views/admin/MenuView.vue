<script>
import ListPager from "~/components/ListPager.vue"
import Menu from '~/model/menu'

export default {
  components: {ListPager,},
  data: function() {
    return {
      menusData: null,
      tableDataLoading: false,
      curPage: 1,
      pageSize: 5,
      totalCount: null,
      searchInfo: {
        menu_id: '',
        parent_id: '',
      },
    }
  },
  computed: {
  },
  created: function() {
    this.loadMenus(this.searchInfo, this.curPage, this.pageSize)
  },
  methods: {
    loadMenus(searchInfo, page, size) {
      this.tableDataLoading = true
      let menuId = '-1'
      if (searchInfo.menu_id !== '') {
        menuId = searchInfo.menu_id
      }
      let parentId = '-1'
      if (searchInfo.parent_id !== '') {
        parentId = searchInfo.parent_id
      }
      Menu.list(menuId, parentId, page, size, (response) => {
        let data = response.data.data
        this.menusLoadCallback(this, data)
      }, (response, error) => {
        this.tableDataLoading = false//结束loading
        this.$alert('列表加载失败')
      })
    },
    menusLoadCallback(vm, data) {
      vm.tableDataLoading = false//结束loading
      vm.menusData = data.list
      vm.curPage =  data.page
      vm.totalCount = data.total
    },
    curPageChangeHandler(val) {
      this.loadMenus(this.searchInfo, val, this.pageSize)
    },
    searchBtnHandler() {
      this.loadMenus(this.searchInfo, this.curPage, this.pageSize)
    },
    resetBtnHandler() {
      this.searchInfo.menu_id = ''
      this.searchInfo.parent_id = ''
    },
    addBtnHandler() {
      //todo
    },
    editBtnHandler(menuId) {
      //todo
    },
    delBtnHandler(menuId) {
      //todo
    }
  }
}
</script>

<template>
  <div>
    <el-row>
      <el-col>
        <!--搜索框begin-->
        <div class="search-box">
          <el-form size="medium" class="search-form" label-position="left" :model="searchInfo" @submit.native.prevent>
            <el-row>
              <el-col :span="8">
                <el-form-item label="菜单ID" prop="menu_id">
                  <el-input class="keyword-input" v-model="searchInfo.menu_id" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="父ID" prop="parent_id">
                  <el-input class="keyword-input" v-model="searchInfo.parent_id" clearable></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item >
                  <el-button @click="searchBtnHandler" type="primary">搜索</el-button>
                  <el-button @click="resetBtnHandler">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-divider></el-divider>
        </div>
        <!--搜索框end-->
      </el-col>
    </el-row>
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
            <el-table-column prop="name" label="功能名">
              <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
                <span>({{scope.row.route_name}})</span>
              </template>
            </el-table-column>
            <el-table-column prop="deleted" label="生效状态">
              <template slot-scope="scope">
                <span v-if="scope.row.deleted === 0">生效中</span>
                <span v-else-if="scope.row.deleted === 1">已删除</span>
                <span v-else>未知</span>
              </template>
            </el-table-column>
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