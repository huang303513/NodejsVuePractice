<template>
    <div v-show="show" class="calendar">
        <ul class="cui_cldweek">
            <p class="tip_top">当前车票预售期为30天，您可以预约抢票，开售自动抢</p>
        </ul>
        <ul class="cui_cldweek">
            <li v-for="week in weekDayArr" v-text="week">
            </li>
        </ul>
        <section class="cui_cldunit">
            <div v-for="month in months">
                <h1 class="cui_cldmonth" v-text="month.title">
                </h1>
                <ul class="cui_cld_daybox">
                    <li v-for="(day, index) in month.days" :class="{'cui_cld_day_havetxt': day,
                            'cui_cld_daycrt': selectDateStr == (day && day.dateStr),
                            'cui_cld_daypass': day && !day.chooseAble
                            }" :key="index" @click.stop="clickDate(day)">
                        <em v-if="day && day.title" v-text="(day && day.desc)?day.desc:day.title"></em>
                        <i class="prejl" v-if="day&&day.preJL&&day.chooseAble">预约</i>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        cUtil
    } from "../common/cUtil";
    import dataMixin from "../lib/dataMixin";
    //阳历节日
    var solarHoliday = {
        "0101": "元旦",
        "0214": "情人节",
        "0501": "劳动",
        "0601": "儿童节",
        "0910": "教师节",
        "1001": "国庆",
        "1225": "圣诞"
    };
    //阴历节日
    var lunarHoliday = {
        "20150219": "春节",
        "20150305": "元宵",
        "20150405": "清明",
        "20150620": "端午",
        "20150927": "中秋",
        "20160208": "春节",
        "20160222": "元宵",
        "20160404": "清明",
        "20160609": "端午",
        "20160915": "中秋",
        "20170127": "除夕",
        "20170128": "春节",
        "20170211": "元宵",
        "20170404": "清明",
        "20170530": "端午",
        "20171004": "中秋",
        "20180216": "春节",
        "20180302": "元宵",
        "20180405": "清明",
        "20180618": "端午",
        "20180924": "中秋"
    };
    export default {
        data() {
            return {
                weekDayArr: ["日", "一", "二", "三", "四", "五", "六"],
                displayMonthNum: 3,
                months: [],
                endDate: null
            };
        },
        mixins: [dataMixin],
        props: {
            show: {
                type: Boolean,
                default: false
            },
            //数据源的跨度，60天
            range: {
                type: Number,
                default: function() {
                    return 60;
                }
            },
            originalStartDate: {
                type: Date,
                default: function() {
                    return cUtil.getPureDate();
                }
            },
            selectDate: {
                default: function() {
                    return cUtil.getPureDate();
                }
            },
            originalEndDate: {
                default: null
            },
            callback: {
                type: Function,
                default: function() {
                    return function() {};
                }
            },
            minDate: {
                default: null
            }
        },
        methods: {
            render() {
                /**数据源 */
                var months = [];
                var year = this.originalStartDate.getFullYear();
                var month = this.originalStartDate.getMonth();
                //20171124
                var curDayStr = cUtil.format("Ymd", this.originalStartDate);
                //alert(cUtil.format);
                //debugger;
                var minDate = this.minDate || this.originalStartDate;
                for (var i = 0; i < this.displayMonthNum; i++) {
                    var curMonth = month + i;
                    var curYear = year;
                    if (curMonth > 11) {
                        curYear = year + 1;
                        curMonth = curMonth % 12;
                    }
                    var beginDay = cUtil.getBeginDayOfMouth(curYear, curMonth);
                    //月初有几个是空的，则添加几个空数据。比如11.1是周三，那么周一和周二就是空数据
                    var days = new Array(beginDay);
                    var yearMonth = "" + curYear + cUtil.pad(curMonth + 1);
                    var curDays = cUtil.getDaysOfMonth(curYear, curMonth);
                    for (var j = 1; j <= curDays; j++) {
                        var curTime = +new Date(curYear, curMonth, j);
                        var tempDayStr = yearMonth + cUtil.pad(j);
                        var desc = "";
                        if (curDayStr == tempDayStr) {
                            desc = "今天";
                        } else {
                            //如果有节假日，则desc等于节假日
                            desc =
                                lunarHoliday[tempDayStr] || solarHoliday[tempDayStr.substr(4, 4)];
                        }
                        var jlLeftTime =
                            (curTime - new Date().getTime()) / (1000 * 60 * 60 * 24);
                        var oneDay = {
                            title: j,
                            desc: desc,
                            dateStr: tempDayStr,
                            chooseAble: curTime >= +minDate && curTime <= +this.endDate,
                            dateTime: curTime,
                            preJL: jlLeftTime > 29 ? true : false //preJL等于true表示预订。
                        };
                        days.push(oneDay);
                    }
                    var monthTitle = "" + curYear + "年" + cUtil.pad(curMonth + 1) + "月";
                    months.push({
                        title: monthTitle,
                        days: days
                    });
                }
                //debugger;
                this.months = months;
            },
            clickDate(day) {
                if (day && day.chooseAble) {
                    this.setTrainQuery(
                        "date",
                        cUtil.format("Y-m-d", new Date(day.dateTime))
                    );
                    this.$emit("calendar-event");
                }
            }
        },
        computed: {
            selectDateStr() {
                return cUtil.format("Ymd", this.selectDate || new Date());
            }
        },
        mounted() {
            this.$nextTick(function() {
                var vsd = this.originalStartDate;
                var ved = this.originalEndDate;
                if (!ved) {
                    ved = cUtil.addDays(vsd, this.range - 1);
                }
                var months;
                if (ved.getMonth() - vsd.getMonth() >= 0) {
                    months = ved.getMonth() - vsd.getMonth() + 1;
                } else {
                    months = ved.getMonth() + 12 - vsd.getMonth() + 1;
                }
                this.endDate = cUtil.getPureDate(ved);
                this.displayMonthNum = months;
                this.render();
            });
        },
        watch: {
            minDate: function() {
                this.render();
            }
        }
    };
</script>



