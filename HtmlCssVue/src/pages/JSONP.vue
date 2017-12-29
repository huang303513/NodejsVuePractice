<template>
	<div class="popRoot">
		<input class="inputClass" type="tel" v-model="requesturl" placeholder="请输入请求链接" />
		<button class="buttonsytle" type="button" @click="sendJSONPRequest">发送JSONP请求</button>
		<p class="divStyle">服务器接收到的参数并且返回：{{serverData&&serverData.serverReceive}}</p>
		<p class="divStyle">服务器接收到参数并且加工以后返回：{{serverData&&serverData.serverSend}}</p>
		<p class="divStyle">请求出错：{{serverData&&serverData.err}}</p>
	</div>
</template>

<script>
	import mixin from "../lib/mixin";
	import dataMixin from "../lib/dataMixin";
	import jsonpRequest from "../lib/jsonpRequest.js";
	export default {
		data() {
			return {
				requesturl: "https://www.huangchengdu.com/jsonp/jsonpRequest",
				serverData: {}
			};
		},
		mixins: [mixin, dataMixin],
		methods: {
			initPage() {
				this.$root.options.back = null;
				this.setHeaderTitle("JSONP实现与测试");
			},
			async sendJSONPRequest() {
				let params = {
					name: "老黄",
					site: "www.huangchengdu.com"
				};
				this.showLoading();
				let {
					err,
					result
				} = await jsonpRequest(
					this.requesturl,
					params
				);
				this.hiddenLoading();
				if (err) {
					alert(err.message || "请求出错了");
					this.serverData.err = JSON.stringify(err);
				} else {
					this.serverData = result;
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.initPage(from);
			});
		}
	};
</script>

<style lang="less" scoped>
	.inputClass {
		margin-top: 20px;
		margin-left: 20px;
		display: block;
		width: 80%;
		border: 1px solid red; // background-color: green;
		// color: red;
	}
	
	.buttonsytle {
		margin-top: 20px;
		margin-left: 20px;
		display: block;
		background-color: green;
	}
	
	.divStyle {
		margin-top: 20px;
		margin-left: 20px;
		display: block;
		width: 80%;
		border: 1px solid red;
	}
</style>