<template>
  <div class="links">
    <div class="links-main">
      <div class="search-bar">
        <div class="bar-head box_shadow_small fff_bg_color">
          <span @click="showbar = !showbar" class="cursor_point collapsible fl" :class="{'collapsY':showbar,'collapsN':!showbar}"></span>
          <h3 class="fl">Links Management</h3>
          <!--<span class="bar-add-btn fr cps_bg_orange text-center cursor_point">Add Link</span>-->
          <router-link to="/advertiser/advertisers/linksAdd" class="bar-add-btn fr cps_bg_orange text-center cursor_point" tag="span">Add Link</router-link>
        </div>
        <transition name="slide">
          <div v-show="showbar" class="bar-main box_shadow_small fff_bg_color">
            <div class="search-item fl">
              <p class="f14">Activity</p>
              <el-select v-model="search_activity" placeholder="please select" clearable>
                <el-option
                  v-for="item in activityOptions"
                  :label="item.title"
                  :value="item.id">
                </el-option>
              </el-select>
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
            <div class="search-item fl">
              <p class="f14">State</p>
              <el-select v-model="search_state" placeholder="please select" clearable>
                <el-option
                  v-for="item in stateOptions"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="search-item fl">
              <p class="f14">Link Name</p>
              <el-input
                placeholder=""
                v-model="search_input">
              </el-input>
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
              label="Link Name"
              width="300">
            </el-table-column>
            <el-table-column
              prop="ads_name"
              label="Advertising Campaign"
              width="300">
            </el-table-column>
            <el-table-column
              prop="type"
              label="Type">
            </el-table-column>
            <el-table-column
              prop="sizes"
              label="Size">
            </el-table-column>
            <el-table-column
              prop="add_time"
              label="Add Time"
              width="200">
            </el-table-column>
            <el-table-column
              prop="status"
              label="Link State">
            </el-table-column>
            <el-table-column
              label="Operation"
              inline-template>
              <span>
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </span>
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
import elButton from 'element-ui/lib/button'
export default {
  name: 'links',
  components: {
    elInput,
    elSelect,
    elOption,
    elPagination,
    elTable,
    elTableColumn,
    elButton
  },
  data () {
    return {
      // 搜索框显示隐藏
      showbar: true,
      // 搜索条件
      search_input: '',
      search_activity: '',
      search_state: '',
      search_type: '',
      // 分页配置
      current_page: 1,
      page_sizes: [20, 50, 100, 200],
      page_size: 20,
      page_total: 0,
      // 数据
      activityOptions: null,
      typeOptions: [
        {value: '1',label: 'Picture',label_des: '图片'},
        {value: '2',label: 'Text links',label_des: '文字'},
        {value: '3',label: 'Custom Link',label_des: '自定义链接'}
      ],
      stateOptions: [
        {value: '0',label: 'Wait Submit',label_des: '待提交'},
        {value: '1',label: 'Wait Audit',label_des: '待审核'},
        {value: '2',label: 'Refused',label_des: '已拒绝'},
        {value: '3',label: 'Active',label_des: '运行中'},
        {value: '4',label: 'Modify',label_des: '修改待审核'},
        {value: '5',label: 'Hidden',label_des: '已隐藏'},
        {value: '6',label: 'Expired',label_des: '已停止'},
        {value: '7',label: 'Link Error',label_des: '链接错误'},
        {value: '8',label: 'NO LOGO',label_des: '没有LOGO'},
        {value: '9',label: 'Image Damaged',label_des: '图片破损'}
      ],
      tableData: null
    }
  },
  mounted: function(){
    // 获取链接列表
    this.getList()
    // 获取活动列表
    this.getActivityList()
  },
  methods:{
    getList(){
      this.$http.post('/advertiseract/links', {
        rows: this.page_size,
        page: this.current_page,
        ads_id: this.search_activity,
        type: this.search_type,
        status: this.search_state,
        title: this.search_input
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
.links{
  width: 100%;
}
.links-main{
  margin: 10px 30px;
}
</style>
