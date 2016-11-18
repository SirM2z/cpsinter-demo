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

// element-ui局部引入开始
// 语言
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)

// element-ui基础样式
import 'element-ui/lib/theme-default/base.css'

// Icon 图标
import 'element-ui/lib/theme-default/icon.css'

// Layout 布局
// import elRow from 'element-ui/lib/row'
// import elCol from 'element-ui/lib/col'
// import 'element-ui/lib/theme-default/row.css'
// import 'element-ui/lib/theme-default/col.css'

// Message 消息提示
import 'element-ui/lib/theme-default/message.css'

// Notification 通知
import 'element-ui/lib/theme-default/notification.css'

// Radio 单选框
import elRadio from 'element-ui/lib/radio'
import elRadioGroup from 'element-ui/lib/radio-group'
import elRadioButton from 'element-ui/lib/radio-button'
import 'element-ui/lib/theme-default/radio.css'

// Button 按钮
import elButton from 'element-ui/lib/button'
import elButtonGroup from 'element-ui/lib/button-group'
import 'element-ui/lib/theme-default/button.css'

// Input 输入框
import elInput from 'element-ui/lib/input'
import 'element-ui/lib/theme-default/input.css'

// Input Number 数字输入框
import elInputNumber from 'element-ui/lib/input-number'
import 'element-ui/lib/theme-default/input-number.css'

// Select 选择器
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
import elOptionGroup from 'element-ui/lib/option-group'
import 'element-ui/lib/theme-default/select.css'
import 'element-ui/lib/theme-default/select-dropdown.css'
import 'element-ui/lib/theme-default/option.css'

// Dropdown 下拉菜单
import elDropdown from 'element-ui/lib/dropdown'
import elDropdownMenu from 'element-ui/lib/dropdown-menu'
import elDropdownItem from 'element-ui/lib/dropdown-item'
import 'element-ui/lib/theme-default/dropdown.css'

// Upload 上传
import elUpload from 'element-ui/lib/upload'
import 'element-ui/lib/theme-default/upload.css'

// Pagination 分页
import elPagination from 'element-ui/lib/pagination'
import 'element-ui/lib/theme-default/pagination.css'

// Table 表格
import elTable from 'element-ui/lib/table'
import elTableColumn from 'element-ui/lib/table-column'
import 'element-ui/lib/theme-default/table.css'
import 'element-ui/lib/theme-default/table-column.css'

// Date Picker 日期选择器
import elDatePicker from 'element-ui/lib/date-picker'
import 'element-ui/lib/theme-default/date-picker.css'

// element-ui引入结束

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
