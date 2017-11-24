let mixin = {
    methods: {
        setHeader(options, ctx) {
            if (this.$root) {
                this.$root.options = options;
                if (ctx) {
                    this.$root.options.ctx = ctx;
                }
            }
        },
        setHeaderTitle(title) {
            this.$root.options.title = title;
        },
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