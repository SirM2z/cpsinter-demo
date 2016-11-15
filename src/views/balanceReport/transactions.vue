<template>
  <div class="transactions">
    <div class="transactions-main">
      <div class="search-bar box_shadow_small fff_bg_color">
        <div class="bar-head">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Transactions</h3>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main">
            <div class="search-item fl">
              <p class="f14">Creation Time</p>
              <el-date-picker
                v-model="search_time"
                type="daterange"
                placeholder="选择日期范围"
                style="width: 220px">
              </el-date-picker>
            </div>
            <div class="search-item fl">
              <p class="f14">Campaign ID/Name</p>
              <el-input
                placeholder="请输入内容"
                v-model="search_input">
              </el-input>
            </div>
            <div class="search-item fl">
              <p class="f14">Type</p>
              <el-select v-model="search_type" clearable>
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="search-btn cursor_point cps_bg_orange text-center f14 fl">search</div>
          </div>
        </transition>
      </div>
      <div class="main-table box_shadow_small fff_bg_color">
        <div class="page-bar">
          <div class="page-bar-main fr">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="current_page"
              :page-sizes="page_sizes"
              :page-size="page_size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page_total">
            </el-pagination>
          </div>
        </div>
        <div class="table-content">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elInput from 'element-ui/lib/input'
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
import elPagination from 'element-ui/lib/pagination'
import elTable from 'element-ui/lib/table'
import elTableColumn from 'element-ui/lib/table-column'
import elDatePicker from 'element-ui/lib/date-picker'
export default {
  name: 'transactions',
  components: {
    elInput,
    elSelect,
    elOption,
    elPagination,
    elTable,
    elTableColumn,
    elDatePicker
  },
  data () {
    return {
      // 搜索框显示隐藏
      showbar: true,
      // 搜索条件
      search_time: '',
      search_input: '',
      search_type: '',
      export_type: '',
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 50,
      page_total: 400,
      // 数据
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    handleSizeChange: function(pageSize){
      console.log(pageSize)
    },
    handleCurrentChange: function(pageCurrent){
      console.log(pageCurrent)
    }
  }
}
</script>

<style scoped>
.transactions{
  width: 100%;
}
.transactions-main{
  margin: 10px 30px;
}
</style>
