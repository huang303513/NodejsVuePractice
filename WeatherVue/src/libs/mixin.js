/*
 * @Author: huangchengdu
 * @Date:   2016-11-23 21:38:24
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2016-12-01 11:30:25
 */
export default {
    methods: {
        distinct(arr) {
            var obj = {},
                i = 0,
                len = 0;
            if (Array.isArray(arr) && arr.length > 0) {
                len = arr.length;
                for (i = 0; i < len; i += 1) {
                    obj[arr[i]] = arr[i];
                }
                return Object.keys(obj);
            }
            return [];
        },
        showLoading(mask) {
            this.$root.loadingOptions = {
                loading: true,
                mask: mask == undefined ? true : mask
            }
        },
        hideLoading() {
            this.$root.loadingOptions = {
                loading: false
            }
        },
        setHeader (options, ctx) {
            if (this.$root) {
                this.$root.options = options;
                if (ctx) {
                    this.$root.options.ctx = ctx;
                }
                document.title = options.title;
            }
        },

        setHeaderTitle(title) {
            this.$root.options.title = title;
        },
    }
}
