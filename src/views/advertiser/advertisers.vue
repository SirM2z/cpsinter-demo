<template>
  <div class="advertisers">
    <div class="advertisers-tab box_shadow_small fff_bg_color">
      <div class="advertisers-tab-main">
        <div class="advertisers-tab-item cursor_point"><router-link active-class="advertisers-tab-active" to="/advertiser/advertisers" exact>Campaigns</router-link></div>
        <div class="advertisers-tab-item cursor_point"><router-link active-class="advertisers-tab-active" to="/advertiser/advertisers/links" :class="{'advertisers-tab-active':$route.path.indexOf('links')>-1}" exact>Links</router-link></div>
        <div class="advertisers-tab-item cursor_point"><router-link active-class="advertisers-tab-active" to="/advertiser/advertisers/promotions" :class="{'advertisers-tab-active':$route.path.indexOf('promotions')>-1}" exact>Promotions</router-link></div>
        <div class="advertisers-tab-item cursor_point"><router-link active-class="advertisers-tab-active" to="/advertiser/advertisers/incentives" exact>Incentives</router-link></div>
        <div class="advertisers-tab-item cursor_point"><router-link active-class="advertisers-tab-active" to="/advertiser/advertisers/coupons" :class="{'advertisers-tab-active':$route.path.indexOf('coupons')>-1}" exact>Coupons</router-link></div>
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
  name: 'advertisers',
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.advertisers-tab{
  width: 100%;
}
.advertisers-tab-main{
  padding: 0 0 10px 220px;
  display: flex;
  align-items: center;
}
.advertisers-tab-item>a{
  color: #000;
  display: inline-block;
  border-bottom: 2px solid #fff;
  margin: 0 13px;
  padding: 25px 0 3px;
}
a.advertisers-tab-active{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
.advertisers-tab-item>a:hover{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
</style>
