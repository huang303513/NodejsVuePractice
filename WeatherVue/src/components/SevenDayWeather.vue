<template>
  <div>
      <span>{{location}}天气预报</span>
      <ul>
        <li v-for="weather in weatherList" >
            {{weather.morning}}
        </li>
      </ul>
  </div>
</template>

<script>
import mixin from '../libs/mixin'
export default {
  data () {
    return {
      location:"",
      weatherList:null,
      filterType:1,
    }
  },
  mixins:[mixin],
  props:['filterType'],
  events:{
    refresh:function(data){
       if (data == this.filterType) {
          this.loadSevenDayWeather();
       }
    }
  },
  watch: {
        'filterType': function(val) {
            if (val == 1) {
               this.loadSevenDayWeather();
            }
        }
  },
  methods:{
      loadSevenDayWeather(){
        this.location = this.$root.countyInfo.cityZh;
        this.weatherList = [];
        var countyInfo = this.$root.countyInfo;
        var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + countyInfo.lat + "&lon=" + countyInfo.lon + "&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5";
        this.showLoading();
        this.$http.get(url).then((response) =>{
          this.operationData(response.data && response.data.list);
          this.hideLoading();
        },(response) =>{
          this.hideLoading();
        });
      },
      operationData(list){
        var weatherList = [];
        for (var i = 0; i < list.length; i++) {
           var morning = list[i];
           var morningDesc ="时间:" + morning.dt_txt + " " + morning.weather[0].description + " 温度:" + Math.ceil(morning.main.temp - 273.15) + "度 湿度:" + morning.main.humidity + " 风力:" + Math.ceil(morning.wind.speed) + "级";
           var weather = {
            "morning":morningDesc,
            //"night":nightDesc
           }
           weatherList.push(weather);
        }
        this.weatherList = weatherList;
      },
  },
  ready(){

  }
}
</script>

<style type="less" scoped>
ul {
 border:1px solid black
  }
li { 
  border-bottom: 1px dotted black;
  font: normal bold 0.7rem arial,sans-serif;
 }
li.last { 
  border-bottom: none
   }
</style>