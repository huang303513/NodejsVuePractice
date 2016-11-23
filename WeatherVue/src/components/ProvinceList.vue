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


        this.$http.get('https://free-api.heweather.com/v5/now?city=北京&key=d1295777fa904944a14751be32dd7d33').then((response) =>{
          alert("yes");
          console.log(response);
        },(response) =>{
           alert("no");
          console.log(response);
        });
      }
  },
  ready(){
    this.loadProvinceList();
  }
}
</script>