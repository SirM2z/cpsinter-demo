<template>
  <div class="account content-min-width">
    <div class="account-tab box_shadow_small fff_bg_color">
      <div class="account-tab-main">
        <div class="account-tab-item cursor_point"><router-link active-class="account-tab-active" to="/advertiser/account" exact>Personal Information</router-link></div>
        <div class="account-tab-item cursor_point"><router-link active-class="account-tab-active" to="/advertiser/account/password" exact>Change Password</router-link></div>
        <div class="account-tab-item cursor_point"><router-link active-class="account-tab-active" to="/advertiser/account/key" exact>API Key</router-link></div>
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
  name: 'account',
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.account-tab{
  width: 100%;
}
.account-tab-main{
  padding: 0 0 10px 220px;
  display: flex;
  align-items: center;
}
.account-tab-item>a{
  color: #000;
  display: inline-block;
  border-bottom: 2px solid #fff;
  margin: 0 13px;
  padding: 25px 0 3px;
}
a.account-tab-active{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
.account-tab-item>a:hover{
  color: #f07c00;
  border-bottom-color: #f07c00;
}
</style>
