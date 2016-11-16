<template>
  <div class="infoEdit">
    <div class="infoEdit-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Modify Personal Information</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th>Advertisers Name <span>*</span></th>
              <td>JD</td>
            </tr>
            <tr>
              <th>Email <span>*</span></th>
              <td>34678456@163.com</td>
            </tr>
            <tr>
              <th>Currency <span>*</span></th>
              <td>USD</td>
            </tr>
            <tr>
              <th>Telephone <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="telephone">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>MSN/Facebook <span></span></th>
              <td>
                <div class="width-280 fl">
                  <el-select v-model="MSN_Facebook" placeholder="please select" clearable>
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="fl" style="height:28px;line-height:28px;">&nbsp;-&nbsp;</div>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="MSN_Facebook_value">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Fax Number <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="fax_number">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Contacts <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="contacts">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Site Name <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="site_name">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Site URL <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="site_URL">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Company Name <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="company_name">
                  </el-input>
                </div>
              </td>
            </tr>
            <tr>
              <th>Company Address <span>*</span></th>
              <td>
                <div class="width-280 fl">
                  <el-input
                    placeholder=""
                    v-model="company_address">
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
  name: 'infoEdit',
  components: {
    elInput,
    elSelect,
    elOption
  },
  data () {
    return {
      telephone: '',
      MSN_Facebook: '',
      MSN_Facebook_value: '',
      fax_number: '',
      contacts: '',
      site_name: '',
      site_URL: '',
      company_name: '',
      company_address: '',
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
.infoEdit{
  width: 100%;
}
.infoEdit-main{
  margin: 10px 30px;
}
</style>
