import {
    formatDate,
    dateFromDateStr,
    getToday,
    monthOffset,
} from './util.date';

const weekDayArr = ['日', '一', '二', '三', '四', '五', '六'];

let customUtil = {
    getPureDate(date = new Date(), hours = 0) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            hours,
            0,
            0,
            0
        )
    },
    format(form = 'Y-m-d', date = new Date()) {
        let dic = formatDate(date, 'typeDictionary');
        if (form == 'Ymd') {
            return dic["tightDate"];
        } else if (form == 'Y-m-d') {
            //debugger;
            return dic["dateStr"];
        }
        return dic;
    },
    getBeginDayOfMouth(year, month) {
        if (this.isDate(year)) {
            month = year.getMonth();
            year = year.getFullYear();
        }
        var d = new Date(year, month, 1);
        return d.getDay();
    },
    pad(num) {
        return num - 9 > 0 ? '' + num : '0' + num;
    },
    getDaysOfMonth(year, month) {
        //自动减一以便操作
        if (this.isDate(year)) {
            month = year.getMonth() //注意此处月份要加1，所以我们要减一
                //month = year.getMonth()+1; //注意此处月份要加1，使用日期API
            year = year.getFullYear()
        }
        //return new Date(year,month,0).getDate();
        return [
            31,
            this.isLeapYear(year) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ][month]
    },
    //平年瑞年
    isLeapYear(year) {
        //传入为时间格式需要处理
        if (this.isDate(year)) {
            year = year.getFullYear()
        }
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    },
    //当前时间添加天数
    addDays(date = new Date(), n = 1) {
        var temp = new Date(+date)
        temp.setDate(temp.getDate() + n)
        return temp
    },
    getDayInfo(date = new Date()) {
        if (+this.getPureDate() == +this.getPureDate(date)) {
            return '今天'
        }

        if (+this.addDays(this.getPureDate(), 1) == +this.getPureDate(date)) {
            return '明天'
        }

        return '周' + weekDayArr[date.getDay()]
    },
    getMonthDayStr(date = new Date()) {
        const dic = formatDate(date, 'typeDictionary');
        return dic['monthDay'];
    },
    parseDateStr(dateStr) {
        return this.getPureDate(new Date(dateStr.replace(/\-/g, '/')))
    }
};

[
    'Arguments',
    'Function',
    'String',
    'Number',
    'Date',
    'RegExp',
    'Error',
].forEach(function(name) {
    customUtil['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']';
    }
});

export { customUtil as cUtil };