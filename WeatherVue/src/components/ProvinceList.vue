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
        this.$http.jsonp('http://www.thinkpage.cn/doc/v2/cities?type=array').then((response) =>{
          alert(response);
          console.log(response);
        },(response) =>{
          
        });
      }
  },
  ready(){
    this.loadProvinceList();
  }
}
</script>