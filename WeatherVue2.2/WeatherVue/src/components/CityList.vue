<template>
  <div class="city">
      <ul>
        <li v-for="name in cityList" class="listCell" v-on:click="goCounty(name)">
            <span>{{name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import mixin from '../libs/mixin'
import citieslatlon from '../common/citieslatlon';
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
      this.$router.push({
         name:"county"
      })
     },
     getCityList(){
     	var province = this.$root.province;
      this.$root.citieslatlon = citieslatlon;
      //alert(this.$root.citieslatlon);
     	var citys =citieslatlon.filter(function(item,index){
     		return item.provinceZh === province;
     	});

     	var cityNames = citys.map(function(item,index){
     		return item.leaderZh;
     	});
     	this.cityList = this.distinct(cityNames);
     	//console.log(citys);
     }
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {
            vm.getCityList();
            //alert("heh");
            vm.setHeaderTitle("城市");
        // vm.setHeader({
        //     title: '城市',
        //     back: {
        //         tagname: 'back',
        //         callback: function () {
        //             history.back();
        //         }
        //     },
        //     right: null
        // },vm);
       });
  }
}
</script>
<style type="less" scoped>

</style>