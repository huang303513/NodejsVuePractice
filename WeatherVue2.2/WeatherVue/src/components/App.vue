<template>
	<div >
		<div id="root">
			<header-comp v-bind:options="options"></header-comp>
			<keep-alive>
				<router-view class="view">
				</router-view>
			</keep-alive>
		</div>
		<loading-comp :load-options="loadingOptions"></loading-comp>
	</div>
</template>
<script>
import Loading from './Loading.vue';
import Header from './Header.vue';
export default {
	data(){
		return {
			options:{},
			province:{},
			city:{},
			countyInfo:{},
			citieslatlon:[],
			loadingOptions: {},
		}
	},
	components:{
	  'loading-comp':Loading,
	  'header-comp':Header,
	},
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