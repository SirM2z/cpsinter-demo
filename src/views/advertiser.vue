<template>
  <div class="adv">
    <navhead-adv></navhead-adv>
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
require('../assets/style/advPart.css')
import navheadAdv from '../components/common/navheadAdv.vue'
export default {
  name: 'adv',
  components: {
    navheadAdv
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
</style>
