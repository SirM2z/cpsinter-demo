<template>
  <div class="password">
    <div class="password-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Change Password</h3>
          <div class="infomation-head-right-note fr f14"><span>*</span> is required to fill out</div>
        </div>
        <div class="add-body">
          <table class="customize add-table" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td colspan="2">
                  <span class="f16">NOTE:</span> If you forget your password, you can login page "<span class="cps_orange">retrieve password</span>" to update the password! Have any other questions, you can contact us.
                </td>
              </tr>
              <tr>
                <th>Original Password <span>*</span></th>
                <td>
                  <div class="width-280">
                    <el-input
                      placeholder=""
                      v-model.trim="original_password">
                    </el-input>
                  </div>
                </td>
              </tr>
              <tr>
                <th>New Password <span>*</span></th>
                <td>
                  <div class="width-280 fl">
                    <el-input
                      placeholder=""
                      v-model.trim="new_password">
                    </el-input>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Confirm Password <span>*</span></th>
                <td>
                  <div class="width-280 fl">
                    <el-input
                      placeholder=""
                      v-model.trim="confirm_password">
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
export default {
  name: 'password',
  components: {
    elInput
  },
  data () {
    return {
      original_password: '',
      new_password: '',
      confirm_password: ''
    }
  },
  methods:{
    changePass: function(){
      // todo: 判断新密码是否一样
      this.$http.post('/advertiser/updateinfo', {
        old: this.original_password,
        passwd: this.new_password
      })
      .then((res) => {
        if(res.s === true){
          console.log(res.d)
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
    }
  }
}
</script>

<style scoped>
.password{
  width: 100%;
}
.password-main{
  margin: 10px 30px;
}
</style>
