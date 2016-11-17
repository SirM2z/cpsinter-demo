<template>
  <div class="nav-head-Adv cps_bg_orange box_shadow_small">
    <div class="nav-content">
      <!--<div class="logo fl"><img class="" src="../../assets/images/Duomai.png" alt=""></div>-->
      <router-link to="/" tag="div" class="logo fl cursor_point"><img class="" src="../../assets/images/Duomai.png" alt=""></router-link>
      <ul class="nav-main fl f18">
        <li class="nav-item cursor_point fl home-item">
          <router-link to="/advertiser" exact>Home</router-link>
          <i v-show="$route.name==='Home'" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point fl advertisers-item">
          <router-link to="/advertiser/advertisers" exact>Advertisers</router-link>
          <i v-show="$route.path.indexOf('advertisers')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point fl reports-item">
          <router-link to="/advertiser/reports" exact>Reports</router-link>
          <i v-show="$route.path.indexOf('reports')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point fl account-item">
          <router-link to="/advertiser/account" exact>Account</router-link>
          <i v-show="$route.path.indexOf('account')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point fl balance-item">
          <router-link to="/advertiser/balanceReport" exact>Balance Report</router-link>
          <i v-show="$route.path.indexOf('balanceReport')>-1" class="nav-item-active-icon"></i>
        </li>
        <li class="nav-item cursor_point fl API-item">
          <router-link to="/advertiser/API" exact>API</router-link>
          <i v-show="$route.path.indexOf('API')>-1" class="nav-item-active-icon"></i>
        </li>
      </ul>
      <div class="personal fr f14">
        <div class="personal-help cursor_point fl"><i><img src="../../assets/images/bangzhu.png" alt=""></i></div>
        <div class="xiaoxi cursor_point fl"><i><img src="../../assets/images/xiaoxi.png" alt=""></i></div>
        <div class="personal-main fl">
          <el-dropdown trigger="click">
            <div class="el-dropdown-link cursor_point fl">
              <div class="personal-icon cursor_point fl"><i><img src="../../assets/images/geren.png" alt=""></i></div>
              <div class="personal-des cursor_point fl"><div class="fff_color">{{user.email}}</div><div class="fff_color">(User ID:{{user.id}})</div></div>
            </div>
            <el-dropdown-menu class="personal-dropdown-menu" slot="dropdown">
              <el-dropdown-item><router-link to="/advertiser/account" class="personal-menu-item" tag="div"><div class="personal-account-icon"></div><div class="personal-account-des">Account</div></router-link></el-dropdown-item>
              <el-dropdown-item><div class="personal-menu-item"><div class="personal-logout-icon"></div><div class="personal-logout-des">Logout</div></div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elDropdown from 'element-ui/lib/dropdown'
import elDropdownMenu from 'element-ui/lib/dropdown-menu'
import elDropdownItem from 'element-ui/lib/dropdown-item'
import {getLS, setLS} from '../../lib/util'
export default {
  name: 'navheadAdv',
  components: {
    elDropdown,
    elDropdownMenu,
    elDropdownItem
  },
  data () {
    return {
      user: getLS('cps_personal_info')
    }
  },
  mounted: function(){
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
}
.nav-content{
  padding: 20px 30px 12px;
  overflow: hidden
}
.nav-main{
  padding-left: 65px;
}
.nav-main>li{
  padding: 8px 15px;
  position: relative;
}
.nav-item>a{
  color: #fff;
}
.personal{
}
.xiaoxi{
  padding: 10px 20px 0;
}
.personal-icon{
  padding-right: 5px;
  margin-top: 9px;
}
.personal-help{
  margin-top: 8px;
}
.personal-des{
  margin-top: 2px;
}
.nav-item-active-icon{
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 7px solid #f1f1f1;
  top: 42px;
}
.home-item>i{
  left: 30px;
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
.personal-menu-item{
  display: flex;
  align-items: center;
  padding: 20px 40px;
}
.personal-account-icon{
  width: 16px;
  height: 18px;
  background: url('../../assets/images/account_xuanzhong.png') no-repeat 100%;
  margin-right: 5px;
}
.personal-account-des{
  height: 18px;
  line-height: 18px;
}
.personal-logout-icon{
  width: 17px;
  height: 18px;
  background: url('../../assets/images/Logout_weixuanzhong.png') no-repeat 100%;
  margin-right: 5px;
}
.personal-logout-des{
  height: 18px;
  line-height: 18px;
}
.personal-dropdown-menu{
  border-radius: 4px;
}
</style>
