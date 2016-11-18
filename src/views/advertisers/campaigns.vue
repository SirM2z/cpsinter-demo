<template>
  <div class="campaigns">
    <div class="campaigns-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Campaigns</h3>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main box_shadow_small fff_bg_color">
            <div class="search-item fl">
              <p class="f14">Activity ID/Name/URL</p>
              <el-input
                placeholder=""
                v-model="search_input">
              </el-input>
            </div>
            <div class="search-item fl">
              <p class="f14">Activity State</p>
              <el-select v-model="search_state" placeholder="please select" clearable>
                <el-option
                  v-for="item in activityState"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="search-item fl">
              <p class="f14">Review Way</p>
              <el-select v-model="search_review" placeholder="please select" clearable>
                <el-option
                  v-for="item in reviewWay"
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
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              label="Activity"
              width="700"
              inline-template>
              <div class="activity-table-td">
                <div class="activity-img"><img :src="getImgSrc(row)" alt=""></div>
                <div>
                  <p>{{row.title}}</p>
                  <p>Activity Time:{{row.stime}} to {{row.etime}}</p>
                </div>
              </div>
            </el-table-column>
            <el-table-column
              prop="links"
              label="Number Of Links"
              width="180">
            </el-table-column>
            <el-table-column
              prop="apply_mode_name"
              label="Review Way">
            </el-table-column>
            </el-table-column>
            <el-table-column
              prop="apply_status_name"
              label="Activity State">
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
export default {
  name: 'campaigns',
  components: {
    elInput,
    elSelect,
    elOption,
    elPagination,
    elTable,
    elTableColumn
  },
  data () {
    return {
      // 搜索框显示隐藏
      showbar: true,
      // 搜索条件
      search_input: '',
      search_state: '',
      search_review: '',
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 20,
      page_total: 0,
      // 数据
      activityState: [
        {value: '0',label: 'Wait Submit',label_des: '待提交'},
        {value: '1',label: 'Wait Audit',label_des: '待审核'},
        {value: '2',label: 'Refused',label_des: '已拒绝'},
        {value: '3',label: 'Active',label_des: '运行中'},
        {value: '4',label: 'Modify',label_des: '修改待审核'},
        {value: '5',label: 'Hidden',label_des: '已冻结'},
        {value: '6',label: 'Complete',label_des: '已完成'},
        {value: '7',label: 'Expired',label_des: '已终止'},
        {value: '8',label: 'Hang',label_des: '已挂起'}
      ],
      reviewWay: [
        {value: '0',label: 'Without review',label_des: '无须审核'},
        {value: '1',label: 'Human review',label_des: '人工审核'},
        {value: '2',label: 'Automated Review',label_des: '自动通过'}
      ],
      tableData: null
    }
  },
  mounted: function(){
    // 获取活动列表
    this.getList()
  },
  methods:{
    getList(){
      this.$http.post('/advertiseract/list', {
        rows: this.page_size,
        page: this.current_page,
        keyword: this.search_input,
        apply_status: this.search_state,
        apply_mode: this.search_review
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
    },
    getImgSrc: function(row){
      return row.logo
    }
  }
}
</script>

<style scoped>
.campaigns{
  width: 100%;
}
.campaigns-main{
  margin: 10px 30px;
}
</style>
