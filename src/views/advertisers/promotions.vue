<template>
  <div class="promotions">
    <div class="promotions-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Promotions Management</h3>
          <!--<span class="bar-add-btn fr cps_bg_orange text-center cursor_point">Add Promotion</span>-->
          <router-link to="/advertiser/advertisers/promotionsAdd" class="bar-add-btn fr cps_bg_orange text-center cursor_point" tag="span">Add Promotion</router-link>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main box_shadow_small fff_bg_color">
            <div class="search-item fl">
              <p class="f14">Advertising Campaign</p>
              <el-select v-model="search_campaign" placeholder="please select" clearable>
                <el-option
                  v-for="item in activityOptions"
                  :label="item.title"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="search-item fl">
              <p class="f14">Review Status</p>
              <el-select v-model="search_state" placeholder="please select" clearable>
                <el-option
                  v-for="item in stateOptions"
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
              prop="title"
              label="Promotion Name">
            </el-table-column>
            <el-table-column
              inline-template
              label="Period Of Validity">
              <div>
                {{row.avalid_from}} to {{row.avalid_to}}
              </div>
            </el-table-column>
            <el-table-column
              prop="status"
              label="Review State">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
import elPagination from 'element-ui/lib/pagination'
import elTable from 'element-ui/lib/table'
import elTableColumn from 'element-ui/lib/table-column'
export default {
  name: 'promotions',
  components: {
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
      search_campaign: '',
      search_state: '',
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 20,
      page_total: 0,
      // 数据
      activityOptions: null,
      stateOptions: [
        {value: '0',label: 'Not reviewed',label_des: '未审核'},
        {value: '1',label: 'Approval',label_des: '已审核'}
      ],
      tableData: null
    }
  },
  mounted: function(){
    // 获取促销列表
    this.getList()
    // 获取活动列表
    this.getActivityList()
  },
  methods:{
    getList(){
      this.$http.post('/advertiseract/cuxiao', {
        rows: this.page_size,
        page: this.current_page,
        ads_id: this.search_campaign,
        status: this.search_state
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
    getActivityList: function(){
      this.$http.post('/advertiseract/list', {
        debug: true
      })
      .then((res) => {
        if(res.s === true){
          // console.log(res.d)
          this.activityOptions = res.d
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
.promotions{
  width: 100%;
}
.promotions-main{
  margin: 10px 30px;
}
</style>
