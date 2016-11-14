<template>
  <div class="nav-head-index">
    <div class="nav-head-index-main content-width">
      <div class="logo"><img class="cursor_point" src="../../assets/images/logo.png" alt=""></div>
      <div class="nav-main f18">
        <div class="home nav-item cursor_point"><router-link active-class="nav-item-active" to="/" exact>Home</router-link></div>
        <div class="publisher nav-item cursor_point">Publisher</div>
        <div class="advertiser nav-item cursor_point fr">Advertiser</div>
        <ul class="advertiser-hover">
          <li class="f16 text-center cursor_point"><router-link active-class="nav-item-active" to="/advertiser" exact>Advertiser Services</router-link></li>
          <li class="f16 text-center cursor_point">Advertiser Terms of Use</li>
        </ul>
      </div>
      <div class="login nav-item f18 cursor_point" @click="showLogin">Login</div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div class="login-hover" v-show="loginmodal">
          <h3 class="f18">Client Login</h3>
          <div class="login-input">
            <input type="text" placeholder="Username" value="">
            <input type="password" placeholder="Password" value="">
            <div class="login-btn cps_bg_orange text-center">LOGIN</div>
          </div>
          <div class="login-forget f18">
            Forgot your password? <span class="forget-a f14 cps_orange cursor_point">Click here</span> for assistance
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navheadIndex',
  data () {
    return {
      loginmodal: false
    }
  },
  mounted: function(){
  },
  methods:{
    showLogin: function(){
      this.loginmodal = !this.loginmodal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-head-index{
  width: 100%;
  background-color: #fff;
}
.nav-head-index-main{
  display: flex;
  align-items: flex-end;
  position: relative;
}
.logo{
  flex: 1;
  padding: 15px 0 0;
}
.nav-main{
  display: flex;
}
.nav-main>div{
  width: 120px;
  text-align: center;
}
.nav-item{
  padding: 10px 0;
  color: #414141;
}
.nav-item:hover{
  font-weight: bold;
  color: #000;
}
.nav-item-active{
  font-weight: bold;
  color: #000;
}
.advertiser:hover + .advertiser-hover{
  display: block;
}
.advertiser-hover{
  background-color: #fff;
  border-radius: 4px;
  padding: 0 28px;
  position: absolute;
  top: 66px;
  right: 90px;
  box-shadow: 0px 0px 15px 0px #ccc;
  display: none;
}
.advertiser-hover:hover{
  display: block;
}
.advertiser-hover>li{
  height: 60px;
  line-height: 60px;
  width: 220px;
}
.advertiser-hover>li>a{
  color: #414141;
}
.advertiser-hover>li:hover{
  font-weight: bold;
}
.advertiser-hover>li:not(:last-child){
  border-bottom: 1px solid #ccc;
}
.login{
  color: #ec6a17;
  width: 50px;
  margin-left: 120px;
}
.login:hover{
  font-weight: bold;
  color: #ec6a17;
}
.login-hover{
  background-color: #fff;
  border-radius: 4px;
  padding: 19px 29px;
  position: absolute;
  top: 66px;
  right: 0;
  box-shadow: 0px 0px 15px 0px #ccc;
}
.login-hover>h3{
  color: #414141;
  margin-bottom: 10px;
}
.login-input{
  display: flex;
  align-items: center;
}
.login-input>input{
  height: 26px;
  width: 160px;
  border: 0;
  margin: 0;
  padding: 0 0 0 8px;
  outline: none;
  margin-right: 18px;
  background-color: #f3f3f3;
}
.login-btn{
  width: 80px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 4px;
}
.login-forget{
  padding-top: 10px;
}
</style>
