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
      ]
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
          <el-form class="search-form" label-position="left" :model="searchInfo" @submit.native.prevent>
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
                  <el-button @click="searchBtnHandler" type="primary">登录</el-button>
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
      <el-col>
        <!--数据表格begin-->
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
</style>