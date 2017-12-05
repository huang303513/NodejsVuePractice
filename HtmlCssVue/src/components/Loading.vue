<template>
	<div class="loader" v-show="loadingOptions && loadingOptions.loading">
		<div class="cui-grayload-squre">
			<div class="g-m-c"></div>
			<div class="g-m-l"></div>
			<div class="cui-grayload-bfont">
				正在加载...
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			loadingOptions: {
				default: {
					loading: false
				}
			}
		}
	};
</script>

<style lang="less" scoped>

</style>

