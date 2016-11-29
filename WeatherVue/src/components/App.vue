<template>
  <div >
	  <div id="root">
	      <router-view keep-alive>
	      </router-view>
	  </div>
	  <loading-comp :load-options="loadingOptions"></loading-comp>
  </div>
</template>
<script>
import citieslatlon from '../common/citieslatlon';
import Loading from './Loading.vue'
export default {
	data(){
		return {
			province:null,
			city:null,
			countyInfo:null,
			citieslatlon:[],
			loadingOptions: null,
		}
	},
	methods:{

	},
	components:{
	  'loading-comp':Loading
	},
	ready(){
		this.citieslatlon = citieslatlon;
		//console.log(this.citieslatlon);
	}
}
</script>
<style>
</style>