<template>
  <div class="weather">
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
      loadCurrentWeather(){
        var countyInfo = this.$root.countyInfo;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + countyInfo.lat + "&lon=" + countyInfo.lon + "&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5";
        // this.$http.get(url).then((response) =>{
        //   alert("yes");
        //   console.log(response);
        // },(response) =>{
        //    alert("no");
        //   console.log(response);
        // });
        this.$http.get('http://91snoob.cn/weather.php').then((response) =>{
          alert("yes");
          console.log(response);
        },(response) =>{
           alert("no");
          console.log(response);
        });
      }
  },
  ready(){
    this.loadCurrentWeather();
  }
}
</script>