<template>
  <div class="home">
    <div class="home-main">
      <div class="main-left">
        <div class="main-item box_shadow_small recent-data fff_bg_color">
          <div class="item-head">
            <div class="head-title fl">
              <i><img src="../../assets/images/data.png" alt=""></i>
              Recent 30-day data
            </div>
          </div>

        </div>
        <div class="main-left-content">
          <div class="content-left">
            <div class="main-item box_shadow_small dynamic fff_bg_color">
              <div class="item-head">
                <div class="head-title fl">
                  <i><img src="../../assets/images/dynamic.png" alt=""></i>
                  Dynamic
                </div>
                <div class="head-more fr f14">More>></div>
              </div>
              <div class="item-body">
                <ul class="body-content f14">
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content-right">
            <div class="main-item box_shadow_small help-center fff_bg_color">
              <div class="item-head">
                <div class="head-title fl">
                  <i><img src="../../assets/images/tutoria.png" alt=""></i>
                  Help Center
                </div>
                <div class="head-more fr f14">More>></div>
              </div>
              <div class="item-body">
                <ul class="body-content f14">
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                  <li>Today is a good weather</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="main-item box_shadow_small active-state fff_bg_color">
          <div class="item-head">
            <div class="head-title fl">
              <i><img src="../../assets/images/state.png" alt=""></i>
              Active State
            </div>
          </div>
          <div class="item-body">
            <table class="customize f14" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <th rowspan="2">Advertising</th>
                <th>Wait Submit</th>
                <th>Wait Audit</th>
                <th>Refused</th>
                <th>Active</th>
                <th>Modify</th>
                <th>Freeze</th>
                <th>Complete</th>
                <th>Expired</th>
                <th>Hang</th>
              </tr>
              <tr>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
              </tr>
              <tr>
                <th rowspan="2">Advertising</th>
                <th>Wait Submit</th>
                <th>Wait Audit</th>
                <th>Refused</th>
                <th>Active</th>
                <th>Modify</th>
                <th>Hidden</th>
                <th>Expired</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="main-item box_shadow_small network-stats fff_bg_color">
          <div class="item-head">
            <div class="head-title fl">
              <i><img src="../../assets/images/network.png" alt=""></i>
              Network Stats
            </div>
          </div>
          <div class="item-body">
            <div class="body-select fr">
              <el-select v-model="network_stats_type" placeholder="please select" clearable>
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <table class="customize f14" style="width:100%;" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <th rowspan="2">Advertising</th>
                <th colspan="3">Confirm</th>
                <th colspan="3">Intention</th>
              </tr>
              <tr>
                <th>Order</th>
                <th>Amount</th>
                <th>Commission</th>
                <th>Order</th>
                <th>Amount</th>
                <th>Commission</th>
              </tr>
              <tr>
                <td>Ad Name 1</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
              </tr>
              <tr>
                <td>Ad Name 2</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
                <td>555</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elSelect from 'element-ui/lib/select'
import elOption from 'element-ui/lib/option'
export default {
  name: 'home',
  components: {
    elSelect,
    elOption
  },
  data () {
    return {
      network_stats_type: '',
      // 数据
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
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
  padding: 10px 30px;
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
.item-head{
  overflow: hidden;
  margin-bottom: 25px;
}
.head-more{
  padding-top: 9px;
  color: #7c7c7c;
}
.item-body{
  padding: 0 10px;
}
.body-content>li{
  margin-bottom: 20px;
  list-style-type: initial;
  list-style-position: inside;
}
.body-select{
  width: 160px;
  margin-bottom: 10px;
}
</style>
