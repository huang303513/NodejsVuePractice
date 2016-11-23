<template>
  <div class="hello1">
    <h1>呵呵呵呵呵呵</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      loadProvinceList(){
        // this.$http.get('http://files.heweather.com/china-city-list.json').then((response) =>{
        //   alert("yes");
        //   console.log(response);
        // },(response) =>{
        //    alert("no");
        //   console.log(response);
        // });


        // this.$http.get('http://api.jirengu.com/weather.php').then((response) =>{
        //   alert("yes");
        //   console.log(response);
        // },(response) =>{
        //    alert("no");
        //   console.log(response);
        // });



        // this.$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5').then((response) =>{
        //   alert("yes");
        //   console.log(response);
        // },(response) =>{
        //    alert("no");
        //   console.log(response);
        // });

        // this.$http.get('http://api.openweathermap.org/data/2.5/weather?lat=39.904&lon=116.391&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5').then((response) =>{
        //   alert("yes");
        //   console.log(response);
        // },(response) =>{
        //    alert("no");
        //   console.log(response);
        // });

        this.$http.get('http://api.openweathermap.org/data/2.5/weather?lat=39.904&lon=116.391&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5').then((response) =>{
          //alert("yes");
          console.log(response);
        },(response) =>{
           //alert("no");
          console.log(response);
        });
      }
  },
  ready(){
    this.loadProvinceList();
  }
}
</script>