<template>
    <div class="popRoot">
        <ul class="popRoot_title">
            <p>各种弹框组件</p>
        </ul>
        <section>
            <div class="popSection_div" v-for="(item,index) in compList">
                <div :class="['popSection_div_div']" @click="clickItem(item)">
                    <em>{{item.title}}</em>
                </div>
            </div>
        </section>
        <ul class="popRoot_title">
            <p>结束</p>
        </ul>
    </div>
</template>

<script>
    let compList = [{
        title: "alert组件",
        action: "showAlert"
    }, {
        title: "confirm组件",
        action: "showConfirm"
    }, {
        title: "toast组件",
        action: "showToast"
    }, {
        title: "dialog组件",
        action: "showDialog"
    }, {
        title: "Loading组件",
        action: "showLoading"
    }, {
        title: "分享组件",
        action: "showShare"
    }];
    import mixin from '../lib/mixin';
    import dataMixin from '../lib/dataMixin';
    export default {
        data() {
            return {
                compList: compList
            };
        },
        mixins: [mixin, dataMixin],
        methods: {
            initPage() {
                this.$root.options.back = null;
                this.setHeaderTitle("各种弹框组件");
            },
            clickItem(item) {
                this[item.action]();
                if (item.action == 'showLoading') {
                    setTimeout(()=>{
                        this.hiddenLoading();
                    },3000);
                }
            },
            showConfirm() {
                
            },
            showToast() {
                
            },
            showDialog() {
                
            },
            showShare() {
                
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.initPage(from);
            });
        }
    }
</script>