<template>
  <div class="promotionsAdd">
    <div class="promotionsAdd-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Add Promotions</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th>Advertising Campaign <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-select v-model="campaign" placeholder="please select" clearable>
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </td>
            </tr>
            <tr>
              <th>Promotion Name <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-input
                    placeholder=""
                    v-model="promotion_name">
                  </el-input>
                </div>
                <p class="table-td-note f14 fl">Enter any keywords to find the corresponding event from the drop-down list</p>
              </td>
            </tr>
            <tr>
              <th>Period Of Validity <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="period_start">
                  </el-input>
                </div>
                <div class="fl" style="height:28px;line-height:28px;">&nbsp;-&nbsp;</div>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="period_end">
                  </el-input>
                </div>
                <div style="clear: both;"></div>
                <p class="table-td-note f14 fl">If you did not follow the order to enter order tracking problem; if the amount of the order, select a commission disagrees order settlement issue</p>
              </td>
            </tr>
            <tr>
              <th>Promotion URL <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="promotion_url">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Promotion Content <span>*</span></th>
              <td>555 77 854</td>
            </tr>
          </table>
        </div>
        <div class="add-btn text-center">
          <span class="add-confirm-btn cursor_point cps_bg_orange f14">Confirm</span>
          <span class="add-return-btn cursor_point cps_bg_orange f14">Return</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elInput from 'element-ui/lib/input'
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
export default {
  name: 'promotionsAdd',
  components: {
    elInput,
    elSelect,
    elOption
  },
  data () {
    return {
      campaign: '',
      promotion_name: '',
      period_start: '',
      period_end: '',
      promotion_url:'',
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
      }]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.promotionsAdd{
  width: 100%;
}
.promotionsAdd-main{
  margin: 10px 30px;
}
</style>
