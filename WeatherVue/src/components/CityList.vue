<template>
  <div class="city">
      <ul>
        <li v-for="name in cityList" class="listCell" v-touch:tap="goCounty(name)">
            <span>{{name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import mixin from '../libs/mixin'
export default {
	mixins:[mixin],
  data () {
    return {
      cityList:[],
    }
  },
  methods:{
     goCounty(name){
     	this.$root.city = name;
       router.go({
         name:"county"
       })
     },
     getCityList(){
     	var province = this.$root.province;
     	var citys = this.$root.citieslatlon.filter(function(item,index){
     		return item.provinceZh === province;
     	});

     	var cityNames = citys.map(function(item,index){
     		return item.leaderZh;
     	});
     	this.cityList = this.distinct(cityNames);
     	//console.log(citys);
     }
  },
  route: {
  	data() {
  		this.getCityList();
      this.setHeaderTitle("城市");
  	}
  },
  ready(){

  }
}
</script>
<style type="less" scoped>

</style>