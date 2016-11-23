<template>
  <div class="city">
      <ul>
        <li v-for="province in cityList" class="listCell" v-touch:tap="goCity">
            <span>{{province.leaderZh}}</span>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      cityList:[],
    }
  },
  methods:{
     goCity(){
       // router.go({
       //   name:"citylist"
       // })
     },
     getCityList(){
     	var province = this.$root.province;
     	this.cityList = this.$root.citieslatlon.filter(function(item,index){
     		return item.provinceZh === province;
     	});
     	//console.log(this.cityList);
     }
  },
  route: {
  	data() {
  		this.getCityList();
  	}
  },
  ready(){

  }
}
</script>
<style type="less" scoped>

</style>