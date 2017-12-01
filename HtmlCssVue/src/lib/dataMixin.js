import { cUtil } from '../common/cUtil';

let mixin = {
    methods: {
        //第一次进入页面的时候调用，可以用于初始化数据
        beforeCreate() {
            this.initInfo();
        },
        initInfo() {
            this.$root.trainQuery = this.getTrainQuery();
            this.$root.alertOptions = {
                show:false,
                title:"提示",
                message:"弹框",
                butttonTitle:"确定"
            };
            console.log("进入新页面");
        },
        getTrainQuery(key) {
            if (!this.$root.trainQuery) {
                this.$root.trainQuery = {
                    from: {
                        name: '上海',
                        cityName: '上海'
                    },

                    to: {
                        name: '北京',
                        cityName: '北京'
                    },

                    date: cUtil.format('Y-m-d', cUtil.addDays(new Date(), 1)),

                    isGaotie: false,
                    isStudentTicket: false,
                };
            }
            if (typeof key !== 'undefined') {
                return this.$root.trainQuery[key];
            }
            return this.$root.trainQuery;
        },
        setTrainQuery(key, val) {
            if (typeof key == 'object') {
                this.$root.trainQuery = key;
            } else {
                if (!this.$root.trainQuery) {
                    this.$root.trainQuery = this.getTrainQuery();
                }
                this.$set(this.$root.trainQuery, key, val);
            }
        }
    }
}

export default mixin;