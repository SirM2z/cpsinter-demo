<template>
  <div class="couponsAdd">
    <div class="couponsAdd-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Add Coupon</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th>Choice Activity <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-select v-model="activity" placeholder="please select" clearable>
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
              <th>Face Value <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="face_value">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Upload File <span>*</span></th>
              <td>
                <div class="upload-td-box">
                  <div class="input-file">
                    <el-upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      :show-upload-list="false">
                      <div class="input-file-btn cursor_point f14 text-center fl">Select File</div>
                    </el-upload>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Popular Coupons <span>*</span></th>
              <td>
                <div>
                  <el-radio-group v-model="popular_coupons">
                    <el-radio :label="3">No</el-radio>
                    <el-radio :label="6">Yes</el-radio>
                  </el-radio-group>
                </div>
              </td>
            </tr>
            <tr>
              <th>Exclusive Coupons <span>*</span></th>
              <td>
                <div>
                  <el-radio-group v-model="exclusive_coupons">
                    <el-radio :label="3">No</el-radio>
                    <el-radio :label="6">Yes</el-radio>
                  </el-radio-group>
                </div>
              </td>
            </tr>
            <tr>
              <th>Material type <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-select v-model="material_type" placeholder="please select" clearable>
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
              <th>Incentive Activities <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-select v-model="incentive_activities" placeholder="please select" clearable>
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
              <th>Period Of Validity <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="validity_start">
                  </el-input>
                </div>
                <div class="fl" style="height:28px;line-height:28px;">&nbsp;-&nbsp;</div>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="validity_end">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Remark <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 6}"
                    placeholder=""
                    v-model="remark">
                  </el-input>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="add-btn text-center">
          <span class="add-confirm-btn cursor_point cps_bg_orange f14">Confirm</span>
          <span @click="$router.go(-1)" class="add-return-btn cursor_point cps_bg_orange f14">Return</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elInput from 'element-ui/lib/input'
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
import elRadio from 'element-ui/lib/radio'
import elRadioGroup from 'element-ui/lib/radio-group'
import elUpload from 'element-ui/lib/upload'
export default {
  name: 'couponsAdd',
  components: {
    elInput,
    elSelect,
    elOption,
    elRadio,
    elRadioGroup,
    elUpload
  },
  data () {
    return {
      activity: '',
      face_value: '',
      popular_coupons: '',
      exclusive_coupons: '',
      material_type: '',
      incentive_activities: '',
      validity_start: '',
      validity_end: '',
      remark: '',
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
    }
  },
  methods:{
    uploadFile: function(){

    }
  }
}
</script>

<style scoped>
.couponsAdd{
  width: 100%;
}
.couponsAdd-main{
  margin: 10px 30px;
}
</style>
