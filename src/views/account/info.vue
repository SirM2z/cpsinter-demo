<template>
  <div class="info">
    <div class="info-main">
      <div class="infomation fff_bg_color">
        <div class="infomation-head">
          <h3 class="f16 fl">Balance Details</h3>
          <!--<div class="infomation-head-right text-center cursor_point cps_bg_orange fr f14">Modify Member Information</div>-->
          <router-link to="/advertiser/account/infoEdit" class="infomation-head-right text-center cursor_point cps_bg_orange fr f14" tag="div">Modify Member Information</router-link>
        </div>
        <div class="infomation-body">
          <div class="infomation-item f14">
            <div class="item">
              <label>Advertisers Name: </label>
              <span class="">{{user.adser}} （User ID：{{user.id}}）</span>
            </div>
            <div class="item">
              <label>Telephone: </label>
              <span class="">{{user.tele}}</span>
            </div>
            <div class="item">
              <label>Email: </label>
              <span class="">{{user.email}}</span>
            </div>
          </div>
          <div class="infomation-item f14">
            <div class="item">
              <label>Password: </label>
              <span class="">******</span>
              <router-link to="/advertiser/account/password">Modify</router-link>
              <!--<a href="">Modify</a>-->
            </div>
            <div class="item">
              <label>MSN/Facebook: </label>
              <span class="">405734578(Facebook)</span>
            </div>
            <div class="item">
              <label>Currency: </label>
              <span class="">USD</span>
            </div>
          </div>
          <div class="infomation-item f14">
            <div class="item">
              <label>Contact: </label>
              <span class="">{{user.contact}}</span>
            </div>
            <div class="item">
              <label>Fax Number: </label>
              <span class="">{{user.fax}}</span>
            </div>
            <div class="item">
              <label>Site Name: </label>
              <span class="">{{user.web}}</span>
            </div>
          </div>
          <div class="infomation-item f14">
            <div class="item">
              <label>Site URL: </label>
              <span class="">{{user.url}}</span>
            </div>
            <div class="item">
              <label>Company Name: </label>
              <span class="">{{user.company}}</span>
            </div>
            <div class="item">
              <label>Company Address: </label>
              <span class="">{{user.address}}</span>
            </div>
          </div>
          <div class="infomation-item f14">
            <div class="item">
              <label>Review Status: </label>
              <span class="">{{user.status==1?"已审核":"未审核"}}</span>
            </div>
            <div class="item">
              <label> </label>
              <span class=""></span>
            </div>
            <div class="item">
              <label> </label>
              <span class=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getLS, setLS} from '../../lib/util'
export default {
  name: 'info',
  data () {
    return {
      user: getLS('cps_personal_info')
    }
  },
  mounted: function(){
    // 获取广告主信息
    // this.getInfo()
  },
  methods:{
  }
}
</script>

<style scoped>
.info{
  width: 100%;
}
.info-main{
  margin: 10px 30px;
}
</style>
