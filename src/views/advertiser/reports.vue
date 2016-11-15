<template>
  <div class="reports content-min-width">
    <div class="reports-tab box_shadow_small fff_bg_color">
      <div class="reports-tab-main">
        <div class="reports-tab-item cursor_point"><router-link active-class="reports-tab-active" to="/advertiser/reports" exact>Performance Reports</router-link></div>
        <div class="reports-tab-item cursor_point"><router-link active-class="reports-tab-active" to="/advertiser/reports/transaction" exact>Transaction Reports</router-link></div>
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
  name: 'reports',
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.reports-tab{
  width: 100%;
}
.reports-tab-main{
  padding: 0 0 10px 220px;
  display: flex;
  align-items: center;
}
.reports-tab-item>a{
  color: #000;
  display: inline-block;
  border-bottom: 2px solid #fff;
  margin: 0 13px;
  padding: 25px 0 3px;
}
a.reports-tab-active{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
.reports-tab-item>a:hover{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
</style>
