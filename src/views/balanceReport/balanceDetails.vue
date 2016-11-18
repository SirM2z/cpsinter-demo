<template>
  <div class="balanceDetails">
    <div class="balanceDetails-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Balance Details</h3>
        </div>
        <div class="infomation-body">
          <div class="infomation-item f14">
            <div class="item">
              <label>Deposit: </label>
              <span class="cps_orange">1000.00</span> CNY
            </div>
            <div class="item">
              <label>Prepayment: </label>
              <span class="cps_orange">1000.00</span> CNY
            </div>
            <div class="item">
              <label>Account Management Fees: </label>
              <span class="cps_orange">1000.00</span> CNY
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balanceDetails',
  data () {
    return {
    }
  },
  mounted: function(){
    // 获取财务信息
    this.getInfo()
  },
  methods:{
    getInfo: function(){
      this.$http.post('/advertiseract/finance')
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
.balanceDetails{
  width: 100%;
}
.balanceDetails-main{
  margin: 10px 30px;
}
</style>
