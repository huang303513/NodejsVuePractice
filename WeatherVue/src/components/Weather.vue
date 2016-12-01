<template>
  <div class="weather">
      <current-weather v-show='filterType==0' :filter-type="filterType" :refresh-type="refreshType"></current-weather>
      <sevenday-weather v-show='filterType==1' :filter-type="filterType" :refresh-type="refreshType"></sevenday-weather>
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
      refreshType:null,
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
      changeRefreshType(){
        this.refreshType = this.filterType;
      }
  },
  route: {
    data() {
      this.setHeaderTitle("天气");
      this.setRightAction({
            value:"刷新",
            callback: function () {   
              this.changeRefreshType();
            }
        },this);
      //alert("heh");
      this.filterType = null;
      this.filterType = 0;
    }
  },

  detached(){
       this.clearRightAction();
  },
  ready(){
    
  }
}
</script>

<style type="less" scoped>

</style>