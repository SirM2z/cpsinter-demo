<template>
  <div class="performance">
    <div class="performance-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Performance Report</h3>
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
              <p class="f14">Type</p>
              <el-select v-model="search_type" placeholder="please select" clearable>
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="search-btn cursor_point cps_bg_orange text-center f14 fl">search</div>
            <div class="search-item export-item fr">
              <div class="export-type">
                <el-select v-model="export_type" placeholder="please select" clearable>
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="export-btn f14 cursor_point text-center">Export</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="main-table box_shadow_small fff_bg_color">
        <div class="table-content">
          <table class="customize" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <thead>
              <tr>
                <th rowspan="2">Advertising Activity</th>
                <th colspan="3">Intention</th>
                <th colspan="3">Confirm</th>
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
              <tr>
                <td>total</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
              </tr>
              <tr>
                <td>555 77 854</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
                <td>555 77 854</td>
                <td>555 77 855</td>
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
import elDatePicker from 'element-ui/lib/date-picker'
export default {
  name: 'performance',
  components: {
    elInput,
    elSelect,
    elOption,
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
.performance{
  width: 100%;
}
.performance-main{
  margin: 10px 30px;
}
</style>
