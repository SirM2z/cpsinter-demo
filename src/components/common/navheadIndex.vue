<template>
  <div class="nav-head-index">
    <div class="nav-head-index-main content-width">
      <div class="logo"><img class="cursor_point" src="../../assets/images/logo.png" alt=""></div>
      <div class="nav-main f18">
        <div class="home nav-item cursor_point"><router-link active-class="nav-item-active" to="/" exact>Home</router-link></div>
        <div class="publisher nav-item cursor_point">Publisher</div>
        <div class="advertiser nav-item cursor_point fr">Advertiser</div>
        <ul class="advertiser-hover">
          <router-link class="f16 text-center cursor_point" active-class="nav-item-active" to="/advertiser" tag="li" exact>Advertiser Services</router-link>
          <li class="f16 text-center cursor_point">Advertiser Terms of Use</li>
        </ul>
      </div>
      <div class="login nav-item f18 cursor_point" @click="loginmodal = !loginmodal">Login</div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div class="login-hover" v-show="loginmodal">
          <div class="login-type">
            <div @click="loginType = 'publisher'" :class="{'active': loginType == 'publisher'}" class="type-item f14 text-center cursor_point">Publisher</div>
            <div class="type-fenge"></div>
            <div @click="loginType = 'advertiser'" :class="{'active': loginType == 'advertiser'}" class="type-item f14 text-center cursor_point">Advertiser</div>
          </div>
          <div class="login-input">
            <div class="login-input-item"><input type="text" v-model="username" placeholder="Username"></div>
            <div class="login-input-item"><input type="password" v-model="password" placeholder="Password"></div>
            <div class="login-btn cps_bg_orange cursor_point text-center" @click="login">LOGIN</div>
          </div>
          <div class="login-forget f14 text-center">
            Forgot your password? <span class="forget-a cps_orange cursor_point">Click here</span> for assistance
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {getLS, setLS} from '../../lib/util'
export default {
  name: 'navheadIndex',
  data () {
    return {
      loginmodal: false,
      loginType: 'advertiser',
      username: 'chenying@yintai.com',
      password: '123456'
    }
  },
  mounted: function(){
  },
  methods:{
    login: function(){
      let url = this.loginType === 'publisher'?'/publisher/login':'/advertiser/login';
      if(this.username.trim() && this.password.trim())
      this.$http.post(url, {
        email: this.username.trim(),
        password: this.password.trim()
      })
      .then((res) => {
        if(res.s === true){
          // console.log(1);
          setLS('cps_personal_info',res.d)
          // console.log(getLS('cps_personal_info'))
          this.$router.push('advertiser')
        }
        else{
          this.$message({
            type: 'warning',
            message:'The email or password is wrong'
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
  font-weight: 500;
  color: #ec6a17;
}
.login-hover{
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  position: absolute;
  width: 400px;
  top: 66px;
  right: 0;
  box-shadow: 0px 0px 15px 0px #ccc;
}
.login-type{
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.type-item{
  flex: 1;
  padding: 10px 0;
  border-bottom: 2px solid transparent;
  margin: 0 10px;
}
.type-item.active{
  color: #f07c00;
  border-bottom-color: #f07c00;
  font-weight: bold;
}
.type-fenge{
  width: 1px;
  height: 28px;
  background-color: #c0c0c0;
}
.login-input{
}
.login-input-item{
  width: 280px;
  margin: 0 auto 20px;
}
.login-input-item>input{
  height: 26px;
  width: 272px;
  border: 0;
  margin: 0;
  padding: 0 0 0 8px;
  outline: none;
  margin-right: 18px;
  background-color: #f3f3f3;
}
.login-btn{
  width: 280px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  border-radius: 4px;
  margin: 0 auto;
}
.login-forget{
  padding: 20px 0;
}
</style>
