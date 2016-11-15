<template>
  <div class="balanceDetails">
    <div class="balanceDetails-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16">Balance Details</h3>
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
  methods:{
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
