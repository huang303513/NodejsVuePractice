/*
 * @Author: huangchengdu
 * @Date:   2016-11-23 21:38:24
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-02-15 15:52:49
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
        setHeader (option, ctx) {
            //alert(this);
            if (this.$root) {
                //alert(option.title);
                this.$root.option = option;
                document.title = option.title;
            }
        },
        setRightAction (right, ctx) {
            if (this.$root && this.$root.option) {
                if (ctx) {
                    this.$root.option.ctx = ctx;
                }
                this.$root.option.right = right;
            }
        },
        clearRightAction(){
            this.$root.option.right = null;
        },
        setHeaderTitle(title) {
            this.$root.option.title = title;
        },
    }
}
