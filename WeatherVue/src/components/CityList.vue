<template>
  <div class="city">
      <ul>
        <li v-for="name in cityList" class="listCell" v-touch:tap="goCity">
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
     goCity(){
       // router.go({
       //   name:"citylist"
       // })
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
     	console.log(this.cityList)
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