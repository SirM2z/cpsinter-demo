<template>
  <div class="index">
    <navhead-index></navhead-index>
    <div class="banner">
      <div class="content-width text-center"><img src="../assets/images/banner.png" alt=""></div>
    </div>
    <div class="apply">
      <div class="apply-main content-width">
        <div class="advertisor">
          <h3 class="f24 font-bold">Advertisor</h3>
          <p class="adver-info cps_orange f24 font-bold">Drive more sales with CPS Affiliate</p>
          <div class="img"><img src="../assets/images/picture_1.png" alt=""></div>
          <p class="info-detail f15">Connect with consumers and drive more sales with the world’s largest, most productive publisher network.</p>
          <div class="apply-btn cursor_point">APPLY TO BECOME A ADVERTISER</div>
        </div>
        <div class="publisher">
          <h3 class="f24 font-bold">Publisher</h3>
          <p class="publisher-info cps_orange f24 font-bold">Make more money from your website</p>
          <div class="img"><img src="../assets/images/picture_2.png" alt=""></div>
          <p class="info-detail f15">Connect with consumers and drive more sales with the world’s largest, most productive publisher network.</p>
          <div class="apply-btn cursor_point">APPLY TO BECOME A PUBLISHER</div>
        </div>
      </div>
    </div>
    <div class="website-des">
      <div class="website-info content-width text-center">
        <h3 class="cps_orange f24 font-bold">Drive Results for Your Business</h3>
        <div class="info-title f20 font-bold">The world's most successful internet retailers are 2x more likely to choose CPS Affiliate.</div>
        <p class="website-detail f15">Whether it's monetizing website traffic, driving more sales or finding more customers, we understand that our clients' goals are our goals. Learn why affiliate marketing is critical in today’s marketplace and listen to top advertisers and publishers discuss the results they’ve seen running their pay-for-performance programs on the CPS Network.</p>
        <div class="note f18 font-bold">Experience a better network today!</div>
        <div class="btn-more f18 text-center cps_bg_orange cursor_point">LEARN MORE>></div>
      </div>
    </div>
    <div class="contact-div">
      <div class="contact content-width text-center">
        <h3 class="f24 font-bold font-bold">Contact us</h3>
        <div class="contact-main">
          <div class="main-adv">
            <h3 class="f18">Advertiser Support</h3>
            <div class="contact-email f18">duomai@goldenname.com</div>
          </div>
          <div class="main-publisher">
            <h3 class="f18">Publisher Support </h3>
            <div class="contact-email f18">duomai@goldenname.com</div>
          </div>
          <div class="main-msn">
            <h3 class="f18">MSN</h3>
            <div class="contact-email f18">duomai@goldenname.com</div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-foot-div">
      <div class="index-foot content-width">
        <div class="foot-left fl">
          <p class="left-first f14">To be our publishers, you will not only receive commission but also you get a point once you earn ￥1. With the points you can redeem any gift on our platform. Except that, should you become our VIP publisher, we’ll pay you cash bonus as well.</p>
          <p class="left-second f14">At Duomai, we understand that many brands have standards of only working with the top affiliates who are considered to be on brand and relevant to their marketing image. We recognize the need to provide visibility to our top performing merchants into those publisher URLs that are promoting your brand. We are on request able to provide these and happy to work together on ensuring that you are promoted in the best light by our top Chinese affiliates. To partner, we do not require that the advertiser ships to China, as Chinese consumers typically leverage third-party services to get their products into the country.</p>
        </div>
        <div class="foot-right fr text-center">
          <h3 class="f18">Stay Connected</h3>
          <div class="foot-icon">
            <i><img src="../assets/images/twitter.png" alt=""></i>
            <i><img src="../assets/images/facebook.png" alt=""></i>
            <i><img src="../assets/images/V.png" alt=""></i>
            <i><img src="../assets/images/youTube.png" alt=""></i>
          </div>
          <div class="foot-website f14">www.duomai.com© 2004-2011 copyright</div>
          <div class="foot-end f14">Contact Us | Privacy Policy | Terms of Use</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navheadIndex from '../components/common/navheadIndex.vue'
export default {
  name: 'index',
  components: {
    navheadIndex
  },
  data () {
    return {
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
.banner{
  width: 100%;
  background-color: #ec6a17;
}
.banner>div>img{
  display: inline-block;
  line-height: 350px;
  padding: 30px 0;
}
.apply{
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.apply-main{
  display: flex;
  align-items: center;
}
.advertisor,.publisher{
  flex: 1;
  padding: 50px 20px;
  text-align: center;
}
.advertisor>h3,.publisher>h3{
  padding-bottom: 40px;
}
div.img{
  padding: 20px 0 0;
}
.info-detail{
  width: 450px;
  margin: 0 auto;
  padding-bottom: 24px;
  line-height: 22px;
  color: #414141;
}
.apply-btn{
  height: 50px;
  width: 450px;
  margin: 0 auto;
  background-color: #ec6a17;
  line-height: 50px;
  color: #fff;
  border-radius: 4px;
}
.website-des{
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.website-info{
  padding: 60px 0;
}
.website-info>h3{
  padding-bottom: 45px;
}
.info-title{
  padding-bottom: 20px;
}
.website-detail{
  line-height: 22px;
  width: 1200px;
  margin: 0 auto;
  color: #414141;
}
.note{
  padding: 20px 0;
}
.btn-more{
  width: 180px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border-radius: 4px;
  margin: 0 auto;
}
.contact-div{
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.contact{
  padding: 60px 0 50px;
}
.contact-main{
  display: flex;
  align-items: center;
  margin: 40px 0 0;
}
.contact-main>div{
  flex: 1;
  padding-bottom: 3px;
}
.contact-main>div>h3{
  padding: 3px 0 20px;
}
.main-adv,.main-publisher{
  border-right: 1px solid #cccccc;
}
.index-foot-div{
  width: 100%;
  background-color: #fff;
}
.index-foot{
  color: #8b8b8b;
  padding: 60px 0;
  overflow: hidden;
}
.foot-left{
  width: 900px;
  padding-left: 20px;
}
.foot-left>p{
  line-height: 20px;
}
.left-first{
  padding-bottom: 30px;
}
.foot-right{
  width: 400px;
}
.foot-right>h3{
  padding-bottom: 20px;
}
.foot-icon{
  padding-bottom: 45px;
}
.foot-icon>i{
  margin: 0 10px;
}
.foot-website{
  padding-bottom: 10px;
}
</style>
