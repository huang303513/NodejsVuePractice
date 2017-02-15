/*
 * @Author: huangchengdu
 * @Date:   2016-11-23 21:38:24
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-02-15 12:31:22
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
                mask: true
            }
        },
        hideLoading() {
            this.$root.loadingOptions = {
                loading: false,
                mask:false,
            }
        },
        setHeader (options, ctx) {
            //alert(this);
            if (this.$root) {
                //alert(options.title);
                this.$root.options = options;
                if (ctx) {
                    this.$root.options.ctx = ctx;
                }
                document.title = options.title;
            }
        },
        setRightAction (right, ctx) {
            if (this.$root && this.$root.options) {
                if (ctx) {
                    this.$root.options.ctx = ctx;
                }
                this.$root.options.right = right;
            }
        },
        clearRightAction(){
            this.$root.options.right = null;
        },
        setHeaderTitle(title) {
            this.$root.options.title = title;
        },
    }
}
