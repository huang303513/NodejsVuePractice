<template>
  <div >
	  <div id="root">
	      <router-view keep-alive>
	      </router-view>
	  </div>
  </div>
</template>
<script>
import citieslatlon from '../common/citieslatlon';
export default {
	data(){
		return {
			province:null,
			city:null,
			countyInfo:null,
			citieslatlon:[],
		}
	},
	methods:{

	},
	ready(){
		this.citieslatlon = citieslatlon;
		//console.log(this.citieslatlon);
	}
}
</script>
<style>
</style>