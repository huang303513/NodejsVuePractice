<template>
    <div class="rootClass">
        <div id="wrapper">
            <header-comp :options="options"></header-comp>
            <keep-alive>
                <router-view class="view">
                </router-view>
            </keep-alive>
        </div>
        <loading-comp :loading-options="loadingOptions"></loading-comp>
        <alert-comp :alert-options="alertOptions"></alert-comp>
    </div>
</template>

<script>
    import Header from "../components/Header.vue";
    import Loading from "../components/Loading.vue";
    import Alert from "../components/Alert";
    import mixin from "../lib/mixin.js";
    import dataMixin from "../lib/dataMixin.js";
    import {
        cUtil
    } from "../common/cUtil";
    export default {
        data() {
            return {
                options: null, //顶部导航栏处理相关
                loadingOptions: null, //菊花加载处理相关
                alertOptions: null, //alert相关处理
                trainQuery: null //index.vue处理相关
            };
        },
        mixins: [mixin, dataMixin],
        components: {
            "loading-comp": Loading,
            "header-comp": Header,
            "alert-comp": Alert
        },
        mounted() {
            if (!this.trainQuery) {
                this.beforeCreate();
            }
        }
    };
</script>
<<style lang="less" scoped>
.rootClass{
    width:100%;
    height:100%;
    margin:0 auto;
    max-width:1080px;
}
</style>

