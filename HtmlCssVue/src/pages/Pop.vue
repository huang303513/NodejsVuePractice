<template>
    <div>
        dfkljasdf;alksdjfa;
    </div>
</template>

<script>
    import mixin from '../lib/mixin';
    import dataMixin from '../lib/dataMixin';
    export default {
        data() {
            return {};
        },
        mixins: [mixin,dataMixin],
        methods: {
            initPage() {
                this.$root.options.back = null;
                this.setHeaderTitle("各种弹框组件");
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.initPage(from);
            });
        }
    }
</script>