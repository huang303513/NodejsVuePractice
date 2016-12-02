<template>
  <div class="weather">
      <div >
        <current-weather v-show='filterType==0' :filter-type="filterType"></current-weather>
        <sevenday-weather v-show='filterType==1' :filter-type="filterType"></sevenday-weather>
      </div>
      <ul class="botmFilter">
        <li v-touch:tap="changeFilter(0)" :class="{current: filterType==0}">
          目前天气
        </li>
        <li v-touch:tap="changeFilter(1)" :class="{current: filterType==1}">
          7天天气
        </li>
      </ul>
  </div>
</template>

<script>
import mixin from '../libs/mixin'
import currentWeather from './CurrentWeather.vue';
import sevendayWeather from './SevenDayWeather.vue';
export default {
  data () {
    return {
      filterType:null,
    }
  },
  mixins:[mixin],
  components:{
    'current-weather':currentWeather,
    'sevenday-weather':sevendayWeather,
  },
  methods:{
      changeFilter(type){
        this.filterType = type;
      },
      doRefresh(){
        this.$broadcast('refresh',this.filterType);
      },
  },
  route: {
    data() {
      this.setHeaderTitle("天气");
      this.setRightAction({
            value:"刷新",
            callback: function () {   
              this.doRefresh();
            }
        },this);
      this.filterType = 0;
    }
  },

  detached(){
      //这里做清理工作，不然再次进入就不能更新数据
      this.filterType = null;
      this.clearRightAction();
  },
  ready(){
    
  }
}
</script>

<style type="less" scoped>

</style>