<template>
  <div class="linksAdd">
    <div class="linksAdd-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Add Activities Link</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th>Link Type <span>*</span></th>
              <td>
                <div>
                  <el-radio-group v-model="link_type">
                    <el-radio :label="3">Picture</el-radio>
                    <el-radio :label="6">Text Link</el-radio>
                    <el-radio :label="9">Custom Link</el-radio>
                  </el-radio-group>
                </div>
              </td>
            </tr>
            <tr>
              <th>Activity <span>*</span></th>
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
              <th>Link Name <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="link_name">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Upload Pictures <span>*</span></th>
              <td>
                <div class="upload-td-box">
                  <div class="input-file">
                    <el-upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      :show-upload-list="false">
                      <div class="input-file-btn cursor_point f14 text-center fl">Select File</div>
                    </el-upload>
                  </div>
                  <div class="upload-td-note cps_orange f14 text-left">
                    <p>Material package upload notes</p>
                    <p>1. picture naming format supports only English and digital compression package uploads to select all pictures directly compressed into ZIP format, compressed material in folders can not be uploaded.</p>
                    <p>2. Upload the picture must contain business LOGO, activities hoplinks ensure correct, otherwise it will affect the approval material.</p>
                    <p>3. Uploading a single image material can not exceed 5M, otherwise it failed to upload.</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Network Image Address <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-input
                    placeholder=""
                    v-model="network_image_address">
                  </el-input>
                </div>
                <p class="table-td-note f14 fl">If E-commerce has a active picture, paste the picture address to here</p>
              </td>
            </tr>
            <tr>
              <th>URL <span>*</span></th>
              <td>
                <div class="width-280">
                  <el-input
                    placeholder=""
                    v-model="URL">
                  </el-input>
                </div>
                <p class="table-td-note f14 fl">Suggest fill, if you do not fill in the campaign will use the default address</p>
              </td>
            </tr>
            <tr>
              <th>Link Validity <span>*</span></th>
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
                <div style="clear: both;"></div>
                <p class="table-td-note f14 fl">If you do not set the time, it will be the same time as activity</p>
              </td>
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
import elRadio from 'element-ui/lib/radio'
import elRadioGroup from 'element-ui/lib/radio-group'
import elUpload from 'element-ui/lib/upload'
export default {
  name: 'linksAdd',
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
      link_type: '',
      activity: '',
      material_type: '',
      incentive_activities: '',
      link_name: '',
      network_image_address: '',
      URL: '',
      validity_start: '',
      validity_end: '',
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
.linksAdd{
  width: 100%;
}
.linksAdd-main{
  margin: 10px 30px;
}
</style>
