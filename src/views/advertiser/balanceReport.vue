<template>
  <div class="balanceReport">
    <div class="balanceReport-tab box_shadow_small fff_bg_color">
      <div class="balanceReport-tab-main">
        <div class="balanceReport-tab-item cursor_point"><router-link active-class="balanceReport-tab-active" to="/advertiser/balanceReport" exact>Balance Details</router-link></div>
        <div class="balanceReport-tab-item cursor_point"><router-link active-class="balanceReport-tab-active" to="/advertiser/balanceReport/transactions" exact>Transactions</router-link></div>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'balanceReport',
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.balanceReport-tab{
  width: 100%;
}
.balanceReport-tab-main{
  padding: 0 0 10px 220px;
  display: flex;
  align-items: center;
}
.balanceReport-tab-item>a{
  color: #000;
  display: inline-block;
  border-bottom: 2px solid #fff;
  margin: 0 13px;
  padding: 25px 0 3px;
}
a.balanceReport-tab-active{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
.balanceReport-tab-item>a:hover{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
</style>
