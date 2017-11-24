import { cUtil } from '../common/cUtil';

let mixin = {
    methods: {
        beforeCreate() {
            this.initInfo();
        },
        initInfo() {
            this.$root.trainQuery = this.getTrainQuery();
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