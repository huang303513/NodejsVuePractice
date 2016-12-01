<template>
  <div class="weather">
      <current-weather v-show='filterType==0' :filter-type="filterType"></current-weather>
      <sevenday-weather v-show='filterType==1' :filter-type="filterType"></sevenday-weather>
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
        if (this.filterType == type) {
          return;
        }
        this.filterType = type;
      }
  },
  route: {
    data() {
      this.setHeaderTitle("天气");
      this.setRightAction({
            value:"刷新",
            callback: function () {    
            }
        },this);
    }
  },
  detached(){
       this.clearRightAction();
  },
  ready(){
    this.filterType = 0;
  }
}
</script>

<style type="less" scoped>

</style>