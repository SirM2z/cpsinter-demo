<template>
  <div class="home">
    <div class="home-main content-min-width">
      <div class="main-left">
        <div class="main-item recent-data fff_bg_color">Recent 30-day data</div>
        <div class="main-left-content">
          <div class="content-left">
            <div class="main-item incentive fff_bg_color">Incentive</div>
          </div>
          <div class="content-right">
            <div class="main-item make-money-tutoria fff_bg_color">Make Money Tutoria</div>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="main-item active-state fff_bg_color">Active State</div>
        <div class="main-item network-stats fff_bg_color">Network Stats</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.home{
  width: 100%;
}
.home-main{
  padding: 12px 30px 0;
  display: flex;
}
.main-left,.main-right{
  flex: 1;
}
.main-item{
  padding: 25px 20px;
  border-radius: 2px;
  margin-bottom: 10px;
}
.main-left,.content-left{
  margin-right: 20px;
}
.main-left-content{
  margin-bottom: 10px;
  display: flex;
}
.content-left,.content-right{
  flex: 1;
}
</style>
