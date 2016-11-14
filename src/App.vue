<template>
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <load></load>
  </div>
</template>

<script>
require('animate.css')
require('./assets/style/font.css')
require('./assets/style/common.css')
// Layout 布局
// import elRow from 'element-ui/lib/row'
// import elCol from 'element-ui/lib/col'
// import 'element-ui/lib/theme-default/row.css'
// import 'element-ui/lib/theme-default/col.css'
// Icon 图标
import 'element-ui/lib/theme-default/icon.css'
// Message 消息提示
import 'element-ui/lib/theme-default/message.css'
// Notification 通知
import 'element-ui/lib/theme-default/notification.css'
// loading 组件
import load from './components/popup/load.vue'
export default {
  name: 'app',
  components: {
    load
  },
  mounted: function(){
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
