<script>
import ListPager from "~/components/ListPager.vue";
export default {
  components: {ListPager},
  data: function() {
    return {
      curPage: 1,
      pageSize: 20,
      totalCount: 786,
      searchInfo: {
        goods_name: '',
        status: '-1',
        region: '-1',
        publish_time_range: [],
      },
      regionOptions: [
        {
          label: '全部',
          value: '-1'
        },
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
      goodsData: [
        {
          id: 1,
          name: 'vivo x200',
          status_name: '已上架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 2,
          name: 'vivo x100',
          status_name: '已下架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 3,
          name: 'oppo find x7',
          status_name: '已删除',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 4,
          name: 'oppo find x8',
          status_name: '已上架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 5,
          name: 'xiaomi 15',
          status_name: '已上架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 6,
          name: 'xiaomi 14',
          status_name: '已上架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }, {
          id: 7,
          name: 'redmi k80',
          status_name: '待上架',
          price: '5299',
          region_name: '广州市/天河区',
          publish_time: '2024-10-20 11:00:05',
          add_time: '2024-10-01 06:45:47',
          edit_time: '2024-10-19 23:01:58',
          editor: '老丁头'
        }],
    }
  },
  methods: {
    regionChangeHandler(val) {
      console.log('region change')
      console.log(val)
    },
    searchBtnHandler() {
      console.log('begin search')
      console.log(this.searchInfo)
    },
    resetBtnHandler() {
      this.searchInfo.goods_name = ''
      this.searchInfo.status = '-1'
      this.searchInfo.region = '-1'
      this.searchInfo.publish_time_range = []
    },
    curPageChangeHandler(val) {
      console.log('current page change')
      console.log(val)
    },
    editBtnHandler(id) {
      console.log('edit goods')
      console.log(id)
    },
    delBtnHandler(id) {
      console.log('delete goods')
      console.log(id)
    },
    addBtnHandler() {
      console.log('add goods')
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
                <el-form-item label="商品名" prop="goods_name">
                  <el-input class="keyword-input" v-model="searchInfo.goods_name" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="状态" prop="status">
                  <el-select v-model="searchInfo.status">
                    <el-option label="全部" value="-1"></el-option>
                    <el-option label="待上架" value="0"></el-option>
                    <el-option label="已上架" value="1"></el-option>
                    <el-option label="已下架" value="2"></el-option>
                    <el-option label="已删除" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="上架时间" prop="publish_time_range">
                  <el-date-picker
                      v-model="searchInfo.publish_time_range"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="上架区域" prop="region">
                  <el-cascader
                      v-model="searchInfo.region"
                      :options="regionOptions"
                      :props="{ expandTrigger: 'hover' }"
                      @change="regionChangeHandler"></el-cascader>
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
        </div>
        <!--数据表格end-->
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="22">
        <el-button size="medium" icon="el-icon-plus" type="success" @click="addBtnHandler">新建商品</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!--数据表格begin-->
        <div class="data-box">
          <el-table border stripe :data="goodsData">
            <el-table-column prop="id" label="商品ID"></el-table-column>
            <el-table-column prop="name" label="商品名"></el-table-column>
            <el-table-column label="价格">
              <template slot-scope="scope">
                <span>￥</span>
                <span>{{scope.row.price}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status_name" label="上架状态"></el-table-column>
            <el-table-column prop="region_name" label="上架区域"></el-table-column>
            <el-table-column prop="publish_time" label="上架时间"></el-table-column>
            <el-table-column prop="add_time" label="创建时间"></el-table-column>
            <el-table-column prop="edit_time" label="编辑时间"></el-table-column>
            <el-table-column prop="editor" label="最近编辑人"></el-table-column>
            <el-table-column label="操作">
  <!--            <template slot="header" slot-scope="scope">-->
  <!--              <el-button @click="addBtnHandler" type="primary" icon="el-icon-plus" circle></el-button>-->
  <!--            </template>-->
              <template slot-scope="scope">
                <el-button @click="editBtnHandler(scope.row.id)" icon="el-icon-edit" circle></el-button>
                <el-button @click="delBtnHandler(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--数据表格end-->
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