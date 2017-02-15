<template>
	<div >
	<header-comp></header-comp>
		<div id="root">
			
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
			option:{},
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