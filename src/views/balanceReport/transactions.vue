<template>
  <div class="transactions">
    <div class="transactions-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Transactions</h3>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main box_shadow_small fff_bg_color">
            <div class="search-item fl">
              <p class="f14">Creation Time</p>
              <el-date-picker
                v-model="search_time"
                type="daterange"
                placeholder="Select a date range"
                style="width: 220px">
              </el-date-picker>
            </div>
            <div class="search-item fl">
              <p class="f14">Campaign ID/Name</p>
              <el-input
                placeholder=""
                v-model="search_input">
              </el-input>
            </div>
            <div class="search-item fl">
              <p class="f14">Type</p>
              <el-select v-model="search_type" placeholder="please select" clearable>
                <el-option
                  v-for="item in typeOptions"
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
              prop="addtime"
              label="Creation Time">
            </el-table-column>
            <el-table-column
              prop="title"
              label="Advertising Campaign">
            </el-table-column>
            <el-table-column
              prop="finance_type"
              label="Type">
            </el-table-column>
            </el-table-column>
            <el-table-column
              prop="amount"
              label="Amount">
            </el-table-column>
            </el-table-column>
            <el-table-column
              prop="account"
              label="Blance">
            </el-table-column>
            </el-table-column>
            <el-table-column
              prop="note"
              label="Remark">
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
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 20,
      page_total: 0,
      // 数据
      typeOptions: [
        {value: '预付款',label: 'Prepayments',label_des: '预付款'},
        {value: '保证金',label: 'Security deposit',label_des: '保证金'}
      ],
      tableData: null
    }
  },
  mounted: function(){
    // 获取财务明细列表
    this.getList()
  },
  methods:{
    getList(){
      this.$http.post('/advertiseract/financedetail', {
        rows: this.page_size,
        page: this.current_page,
        ads_id: this.search_input,
        finance_type: this.search_type,
        time_from: this.search_time?this.search_time[0]:'',
        time_to: this.search_time?this.search_time[1]:''
      })
      .then((res) => {
        if(res.s === true){
          // console.log(res.d)
          this.page_total = res.d.total
          this.tableData = res.d.rows
        }
        else{
          this.$message({
            type: 'warning',
            message:'Server error'
          })
        }
      })
      .catch((error) => {
        // console.log(error);
        this.$message({
          type: 'error',
          message:'Server error'
        })
      });
    },
    handleSizeChange: function(pageSize){
      this.current_page = 1
      this.page_size = pageSize
      this.getList()
    },
    handleCurrentChange: function(pageCurrent){
      // todo: 验证页面是否超出
      this.current_page = pageCurrent
      this.getList()
    },
    searchList: function(){
      // todo: 验证搜索条件
      this.getList();
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
