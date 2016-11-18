<template>
  <div class="transaction">
    <div class="transaction-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Transaction Reports</h3>
          <div class="export-div fr">
            <!--<div class="export-type">
              <el-select v-model="export_type" placeholder="please select" clearable>
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>-->
            <div class="export-btn f14 cursor_point text-center">Export</div>
          </div>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main box_shadow_small fff_bg_color">
            <div class="search-item fl">
              <p class="f14">Order time</p>
              <el-date-picker
                v-model="search_time"
                type="daterange"
                placeholder="Select a date range"
                style="width: 220px">
              </el-date-picker>
            </div>
            <div class="search-item fl">
              <p class="f14">Activity ID/Name</p>
              <el-input
                placeholder=""
                v-model="search_input">
              </el-input>
            </div>
            <div class="search-item fl">
              <p class="f14">Feedback Label</p>
              <el-input
                placeholder=""
                v-model="search_input_feedback">
              </el-input>
            </div>
            <div class="search-item fl">
              <p class="f14">Status</p>
              <el-select v-model="search_status" placeholder="please select" clearable>
                <el-option
                  v-for="item in typeOptions"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div @click="searchList" class="search-btn cursor_point cps_bg_orange text-center f14 fl">search</div>
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
          <table class="customize" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <thead>
              <tr>
                <th rowspan="2">Activity ID</th>
                <th rowspan="2">Order Time</th>
                <th rowspan="2">Order Number</th>
                <th colspan="3">Intention</th>
                <th colspan="3">Confirm</th>
                <th rowspan="2">Confirm Type</th>
                <th rowspan="2">Type</th>
              </tr>
              <tr>
                <th>Order</th>
                <th>Amount</th>
                <th>Commission</th>
                <th>Order</th>
                <th>Amount</th>
                <th>Commission</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tableTotal">
                <td colspan="3">Total</td>
                <td>{{tableTotal.total_order}}</td>
                <td>{{tableTotal.total_orders_price}}</td>
                <td>{{tableTotal.total_our_commission}}</td>
                <td>{{tableTotal.total_confirm_order}}</td>
                <td>{{tableTotal.total_confirm_price}}</td>
                <td>{{tableTotal.total_confirm_our_commission}}</td>
                <td colspan="2"></td>
              </tr>
              <tr v-if="tableData && tableData.length>0" v-for="item in tableData">
                <td>{{item.ads_id}}</td>
                <td>{{item.order_time}}</td>
                <td>{{item.order_sn}}</td>
                <td>1</td>
                <td>{{item.orders_price}}</td>
                <td>{{item.our_commission}}</td>
                <td>{{item.confirm}}</td>
                <td>{{item.confirm_price}}</td>
                <td>{{item.confirm_our_commission}}</td>
                <td>{{item.rowspan="2"}}</td>
                <td>{{item.confirm_time}}</td>
              </tr>
              <tr v-if="!tableData || tableData.length===0">
                <td colspan="11" style="color:#c1c1c1;">暂无数据</td>
              </tr>
            </tbody>
          </table>
          <div class="table-note">
            <div class="note-title f14 fl">
              <i class="title-icon"></i>
              <span>Report Explanation：</span>
            </div>
            <ul class="note-content fl">
              <li class="note-item">1.Orders, order amount, commissions, may delay about 10 minutes to update.</li>
              <li class="note-item">2.This report displays the status of orders occurred in the specified time period.</li>
              <li class="note-item">3.The data in this report shows is not a final confirmation of settlement data.</li>
            </ul>
          </div>
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
import elDatePicker from 'element-ui/lib/date-picker'
export default {
  name: 'transaction',
  components: {
    elInput,
    elSelect,
    elOption,
    elPagination,
    elDatePicker
  },
  data () {
    return {
      // 搜索框显示隐藏
      showbar: true,
      // 搜索条件
      search_time: '',
      search_input: '',
      search_input_feedback: '',
      search_status: '',
      export_type: '',
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 20,
      page_total: 0,
      // 数据
      typeOptions: [
        {value: 'ads',label: 'Activity',label_des: '活动'},
        {value: 'date',label: 'Time',label_des: '时间'},
      ],
      tableData: null,
      tableTotal: null
    }
  },
  mounted: function(){
    // 获取综合报表列表
    this.getList()
  },
  methods:{
    getList(){
      this.$http.post('/advertiseract/commission', {
        rows: this.page_size,
        page: this.current_page,
        status: this.search_status,
        time_from: this.search_time?this.search_time[0]:'',
        time_to: this.search_time?this.search_time[1]:'',
        actname: this.search_input,
        euid: this.search_input_feedback
      })
      .then((res) => {
        if(res.s === true){
          // console.log(res.d)
          this.tableData = res.d.detail.rows
          this.page_total = res.d.detail.total
          this.tableTotal = res.d.sum
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
.transaction{
  width: 100%;
}
.transaction-main{
  margin: 10px 30px;
}
</style>
