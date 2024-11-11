<script>
  export default {
    data: function() {
      return {
        loginInfo: {
          username: '',
          password: ''
        },
        closeDialogVisible: false,
        rules: {
          username: [
            { required: true, message: '用户名', trigger: 'blur' },
            { min: 3, message: '长度至少 3 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码', trigger: 'blur' },
            { min: 3, message: '长度至少 3 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      closeBtnHandle: function () {
        //window.close()
        this.closeDialogVisible = true
      },
      closeConfirmHandle: function () {
        this.closeDialogVisible = false
        window.close()
      },
      resetBtnHandle: function(formName) {
        console.log(formName)
        this.loginInfo.username = ''
        this.loginInfo.password = ''
      },
      loginBtnHandle: function(formName) {
        console.log(this.$refs[formName])
      }
    }
  }
</script>

<template>
  <el-container>
    <el-main>
      <!--登录表单 begin-->
      <div class="login-box">
        <el-page-header @back="closeBtnHandle" content="登录" title="关闭">
        </el-page-header>
        <el-form ref="loginForm" class="login-form" label-position="top" :model="loginInfo" :rules="rules" @submit.native.prevent>
          <el-form-item label="用户名" prop="username">
            <el-input placeholder="请输入用户名" v-model="loginInfo.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="loginInfo.password" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="loginBtnHandle('loginForm')" type="primary">登录</el-button>
            <el-button @click="resetBtnHandle('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--登录表单 end-->

      <!--关闭确认面板begin-->
      <el-dialog width="30%" :append-to-body="true" :visible.sync="closeDialogVisible">
        <template slot="title">
          <i class="el-icon-switch-button"></i>
          <span>提示</span>
        </template>
        <span>是否关闭窗口？</span>
        <span slot="footer">
                  <el-button @click="closeDialogVisible = false">取 消</el-button>
                  <el-button type="warning" @click="closeConfirmHandle">确 定</el-button>
                </span>
      </el-dialog>
      <!--关闭确认面板begin-->
    </el-main>
  </el-container>
</template>

<style scoped>
.login-box {
  margin-top: 10%;
  margin-right: 30%;
  margin-left: 30%;
  padding: 25px;
  border: 1px solid #d7dae2;
  border-radius: 4px;
}
.login-form {
  margin-top: 20px;
}
</style>