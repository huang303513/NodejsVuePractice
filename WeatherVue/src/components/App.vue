<template>
  <div >
	  <div id="root">
	      <router-view keep-alive>
	      </router-view>
	  </div>
  </div>
</template>
<script>
export default {
	data(){
		return {
			province:null,
			city:null,
			county:null,
		}
	},
	methods:{

	},
	ready(){
		
	}
}
</script>
<style>
</style>