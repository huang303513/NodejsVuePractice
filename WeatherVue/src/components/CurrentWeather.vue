<template>
  <div>
      <span>{{location}}</span>
      <div class="temp" v-show="weatherInfo">
          <div class="deg">{{temp}}</div><div class="zero">0</div>
      </div>
      <div class="desc" v-show="weatherInfo">
          <p>{{description}}</p>
          <p>{{humidity}}</p>
      </div>
  </div>
</template>

<script>
import mixin from '../libs/mixin'
export default {
  data () {
    return {
      location:"",
      weatherInfo:null,
      temp:null,
      description:null,
      humidity:null,
      filterType:0,
    }
  },
  mixins:[mixin],
  props:['filterType'],
  events:{
    refresh:function(data){
       if (data == this.filterType) {
          this.loadCurrentWeather();
       }
    }
  },
  watch: {
      'filterType': function(val) {
          if (val == 0) {
             this.loadCurrentWeather();
          }
      },
  },
  methods:{
      loadCurrentWeather(){
        this.location = this.$root.countyInfo.cityZh;
        this.weatherInfo = null;
        var countyInfo = this.$root.countyInfo;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + countyInfo.lat + "&lon=" + countyInfo.lon + "&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5";
        this.showLoading();
        this.$http.get(url).then((response) =>{
          this.weatherInfo = response.data;
          this.operationData();
          this.hideLoading();
        },(response) =>{
          this.hideLoading();
        });
      },
      operationData(){
        this.temp = Math.ceil(this.weatherInfo.main.temp - 273.15);
        this.description = this.weatherInfo.weather[0].description;
        this.humidity = "湿度" + this.weatherInfo.main.humidity + "%" + " 风力" + Math.ceil(this.weatherInfo.wind.speed) + "级";
      },
  },
  ready(){
    
  }
}
</script>

<style type="less" scoped>

</style>