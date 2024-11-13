<script>
export default {
  name: "GoodsDetailFormDialog",
  data: function () {
    return {
      goodsInfo: {
        id: '0',
        name: '',
        status: '',
        price: '',
        region: '',
      },
      checkPrice(rule, value, callback) {
        if (!value) {
          return callback(new Error('价格不能为空'));
        }
        if (!Number.isInteger(value)) {
          return callback(new Error('价格必须为数值'));
        }
        if(value <= 0) {
          return callback(new Error('价格必须大于0'));
        }
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名', trigger: 'blur' },
          { min: 2, message: '长度至少 2 个字符', trigger: 'blur' }
        ],
        price: [
          { validator: this.checkPrice, trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择区域', trigger: 'blur' },
        ],
      },
      regionOptions: [
        // {
        //   label: '请选择',
        //   value: '-1'
        // },
        {
          label: '广州市',
          value: '1',
          children: [
            {
              label: '全部行政区',
              value: '2',
            },
            {
              label: '越秀区',
              value: '3',
            },
            {
              label: '天河区',
              value: '4',
            }
          ]
        },
        {
          label: '上海市',
          value: '2',
          children: [
            {
              label: '全部行政区',
              value: '3',
            },
            {
              label: '徐汇区',
              value: '4',
            },
            {
              label: '长宁区',
              value: '5',
            }
          ]
        }
      ],
    }
  },
  props: {
    goodsId: {
      type: Number,
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
  computed: {
    dialogTitle: function () {
      if (this.action.toLowerCase() === 'edit') {
        return '编辑商品ID=' + this.goodsInfo.id + " 商品名=" + this.goodsInfo.name
      }else {
        return '创建商品'
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
  methods: {
    refreshGoodsInfo: function () {
      if (this.action === 'edit' && this.goodsId > 0) {
        //TODO请求数据
        //mock
        this.goodsInfo = {
          id: this.goodsId.toString(),
          name: 'redmi k80',
          status: '0',
          price: '5299',
          region: '3',
        }
      }else {
        this.goodsInfo = {
          id: '0',
          name: '',
          status: '',
          price: '',
          region: '',
        }
      }
    },
    confirmBtnHandler: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //TODO 一系列持久化操作
          console.log('detail form submit ok')
          this.callback(true, this.action,this.goodsId,this.goodsInfo)
        }else {
          console.log('detail form submit error')
          return false
        }
      })
    },
    openHandler: function () {
      //对话框打开，重新加载数据
      this.refreshGoodsInfo()
    },
    closeHandler: function () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<template>
  <!--商品详情表格（新增|修改）对话框begin-->
  <el-dialog :title="dialogTitle" :visible.sync="visible" :append-to-body="true" @close="closeHandler" @open="openHandler">
    <el-form size="medium" class="detail-form" label-position="left" ref="detailForm" :rules="rules" :model="goodsInfo" @submit.native.prevent>
      <el-form-item label="商品名" prop="name">
        <el-input v-model="goodsInfo.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model.number="goodsInfo.price"></el-input>
      </el-form-item>
      <el-form-item label="上架区域" prop="region" placeholder="请选择区域">
        <el-cascader
            v-model="goodsInfo.region"
            :options="regionOptions"
            :props="{ expandTrigger: 'hover' }"></el-cascader>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="goodsInfo.status" placeholder="请选择状态">
<!--          <el-option label="请选择" value="-1"></el-option>-->
          <el-option label="待上架" value="0"></el-option>
          <el-option label="已上架" value="1"></el-option>
          <el-option label="已下架" value="2"></el-option>
          <el-option label="已删除" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button @click="confirmBtnHandler('detailForm')" type="primary">{{ btnTitle }}</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!--商品详情表格（新增|修改）对话框end-->
</template>

<style scoped>

</style>