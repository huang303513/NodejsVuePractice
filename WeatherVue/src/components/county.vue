<template>
  <div class="city">
      <ul>
        <li v-for="countyInfo in countyList" class="listCell" v-touch:tap="goWeather(countyInfo)">
            <span>{{countyInfo.cityZh}}</span>
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
      countyList:[],
    }
  },
  methods:{
     goWeather(info){
     	this.$root.countyInfo = info;
      //alert("经度：" + info.lat + "维度：" + info.lon);
       router.go({
         name:"weather"
       })
     },
     getCityList(){
     	var city = this.$root.city;
     	this.countyList = this.$root.citieslatlon.filter(function(item,index){
     		return item.leaderZh === city;
     	});
     }
  },
  route: {
  	data() {
  		this.getCityList();
      this.setHeaderTitle("县");
  	}
  },
  ready(){

  }
}
</script>
<style type="less" scoped>

</style>