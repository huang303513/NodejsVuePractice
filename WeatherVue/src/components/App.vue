<template>
	<div >
		<div id="root">
			<header-comp :options="options"></header-comp>
			<router-view class="view" keep-alive>
			</router-view>
		</div>
		<loading-comp :load-options="loadingOptions"></loading-comp>
	</div>
</template>
<script>
import citieslatlon from '../common/citieslatlon';
import Loading from './Loading.vue';
import Header from './Header.vue';
export default {
	data(){
		return {
			options:null,
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
	  'loading-comp':Loading,
	  'header-comp':Header,
	},
	ready(){
		this.citieslatlon = citieslatlon;
		//console.log(this.citieslatlon);
	}
}
</script>
<style>
#root{
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
.view{
	position: absolute;
	top: 44px;
	bottom: 0px;
	width: 100%;
}
</style>