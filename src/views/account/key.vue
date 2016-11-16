<template>
  <div class="key">
    <div class="key-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">API Key</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td colspan="2">
                  <span class="f16">NOTE:</span> Interface key is used to verify your identity when you push the interface to the league orders.
                </td>
              </tr>
              <tr>
                <th>此处为活动名称 <span>*</span></th>
                <td>
                  <div class="width-280">
                    <el-input
                      placeholder=""
                      v-model="activity_key">
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
export default {
  name: 'key',
  components: {
    elInput
  },
  data () {
    return {
      activity_key: ''
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.key{
  width: 100%;
}
.key-main{
  margin: 10px 30px;
}
</style>
