<template>
  <div class="nav-head-Adv content-min-width cps_bg_orange">
    <div class="nav-content">
      <div class="logo"><img class="" src="../../assets/images/Duomai.png" alt=""></div>
      <ul class="nav-main f18">
        <li class="nav-item cursor_point home-item">
          <router-link active-class="nav-item-active" to="/advertiser" exact>Home</router-link>
          <i v-show="$route.name==='Home'" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point advertisers-item">
          <router-link active-class="nav-item-active" to="/advertiser/advertisers" exact>Advertisers</router-link>
          <i v-show="$route.path.indexOf('advertisers')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point reports-item">
          <router-link active-class="nav-item-active" to="/advertiser/reports" exact>Reports</router-link>
          <i v-show="$route.path.indexOf('reports')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point account-item">
          <router-link active-class="nav-item-active" to="/advertiser/account" exact>Account</router-link>
          <i v-show="$route.path.indexOf('account')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point balance-item">
          <router-link active-class="nav-item-active" to="/advertiser/balanceReport" exact>Balance Report</router-link>
          <i v-show="$route.path.indexOf('balanceReport')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point API-item">
          <router-link active-class="nav-item-active" to="/advertiser/API" exact>API</router-link>
          <i v-show="$route.path.indexOf('API')>-1" class="nav-item-active-icon"></i>
        </li>
      </ul>
      <div class="personal f14">
        <div class="cursor_point"><i><img src="../../assets/images/bangzhu.png" alt=""></i></div>
        <div class="xiaoxi cursor_point"><i><img src="../../assets/images/xiaoxi.png" alt=""></i></div>
        <div class="personal-icon cursor_point"><i><img src="../../assets/images/geren.png" alt=""></i></div>
        <div class="cursor_point"><span>Seven Yu</span><br><span>(Site ID:77777)</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navheadAdv',
  data () {
    return {
    }
  },
  mounted: function(){
    console.log(this.$route)
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-head-Adv{
  width: 100%;
  color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.nav-content{
  display: flex;
  align-items: center;
  padding: 20px 30px 12px;
}
.nav-main{
  flex: 1;
  display: flex;
  padding-left: 65px;
}
.nav-main>li{
  padding: 0 15px;
  position: relative;
}
.nav-item>a{
  color: #fff;
}
.personal{
  width: 215px;
  display: flex;
  align-items: center;
}
.xiaoxi{
  padding: 0 20px;
}
.personal-icon{
  padding-right: 5px;
}
.nav-item-active{

}
.nav-item-active-icon{
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 7px solid #f1f1f1;
  top: 33px;
}
.home-item>i{
  left: 23px;
}
.advertisers-item>i{
  left: 56px;
}
.reports-item>i{
  left: 38px;
}
.account-item>i{
  left: 37px;
}
.balance-item>i{
  left: 69px;
}
.API-item>i{
  left: 20px;
}
</style>
