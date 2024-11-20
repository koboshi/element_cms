<script>
import Menu from '~/model/menu'
export default {
  name: 'MenuDetailFormDialog',
  props: {
    menuId: {
      type: Number
    },
    action: {
      type: String
    },
    visible: {
      type: Boolean,
    },
    callback: {
      type: Function
    }
  },
  data: function() {
    return {
      formDataLoading: false,
      menuInfo: {
        id: 0,
        name: '',
        route_name: '',
        parent_id: '0',
        deleted: '0',
      },
      parentOptions: null,
      rules: {
        name: [
          { required: true, message: '请输入功能名', trigger: 'blur' },
        ],
        route_name: [
          { required: true, message: '请输入路由名', trigger: 'blur' },
        ],
        deleted: [
          { required: true, message: '请选择状态', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择父菜单', trigger: 'blur' },
        ],
      }
    }
  },
  computed: {
    dialogTitle: function () {
      if (this.action.toLowerCase() === 'edit') {
        return '编辑菜单'
      }else {
        return '创建菜单'
      }
    },
    btnTitle: function () {
      if (this.action.toLowerCase() === 'edit') {
        return '修改'
      }else {
        return '创建'
      }
    },
  },
  created: function() {
    Menu.cascader((response) => {
      this.parentOptions = response.data.data
    })
  },
  methods: {
    refreshMenuInfo: function() {
      if (this.action === 'edit' && this.menuId > 0) {
        this.formDataLoading = true
        Menu.info(this.menuId, (response) => {
          let data = response.data.data
          this.menuInfo = {
            id: data.menu_id,
            name: data.name,
            route_name: data.route_name,
            parent_id: data.parent_id.toString(),
            deleted: data.deleted.toString(),
          }
          this.formDataLoading = false
        }, (response, error) => {
          this.formDataLoading = false
        })
      }else {
        this.menuInfo = {
          id: 0,
          name: '',
          route_name: '',
          parent_id: '0',
          deleted: '0',
        }
      }
    },
    confirmBtnHandler: function() {
      //todo
      console.log(this.menuInfo)
      this.callback(true, this.action, this.menuId, this.menuInfo)
    },
    openHandler: function () {
      this.refreshMenuInfo()
    },
    closeHandler: function () {
      this.menuId = 0;
      this.$emit('update:visible', false)
    }
  }
}
</script>

<template>
  <!--菜单详情表格（新增|修改）对话框begin-->
  <el-dialog :title="dialogTitle" :destroy-on-close="true" :visible.sync="visible" :append-to-body="true"
             :close-on-click-modal="false" @close="closeHandler" @open="openHandler">
    <el-form v-loading="formDataLoading" size="medium" class="detail-form" label-position="left" ref="detailForm"
             :rules="rules" :model="menuInfo" @submit.native.prevent>
      <el-form-item label="功能名" prop="name">
        <el-input v-model="menuInfo.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="路由名" prop="route_name">
        <el-input v-model="menuInfo.route_name" clearable></el-input>
      </el-form-item>
      <el-form-item label="父菜单" prop="parent_id">
        <el-cascader
            v-model="menuInfo.parent_id"
            placeholder="请选择父菜单"
            :options="parentOptions"
            :props="{ expandTrigger: 'hover', emitPath: false}"></el-cascader>
      </el-form-item>
      <el-form-item label="生效状态" prop="deleted">
        <el-select v-model="menuInfo.deleted" placeholder="请选择状态">
          <el-option label="生效中" value="0"></el-option>
          <el-option label="已删除" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button @click="confirmBtnHandler" type="primary">{{ btnTitle }}</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!--菜单详情表格（新增|修改）对话框end-->
</template>

<style scoped>

</style>