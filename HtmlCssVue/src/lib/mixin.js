let mixin = {
    methods: {
        showLoading() {
            this.$root.loadingOptions = {
                loading: true
            }
        },
        hiddenLoading() {
            this.$root.loadingOptions = {
                loading: false
            }
        }
    }
};
export default mixin;