exports.formatDate = formatDate;
exports.dateFromDateStr = dateFromDateStr;
exports.getToday = getToday;
exports.monthOffset = monthOffset;

function getToday() {
    var now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now;
}

function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
}

var weeks = ["日", "一", "二", "三", "四", "五", "六"],
    offset = 0;

function dateOffset(realDate) {
    offset = (new Date()).getTime() - realDate.getTime();
}
//yyyy-MM-dd HH:mm:ss  支持缩短  支持/
function dateFromDateStr(dateStr) {
    return new Date(Date.parse(dateStr.replace(/-/g, "/")));
}

//有效期，出行日期
//data1,date2都是yyyy-MM-dd格式的时间字符串
function monthOffset(endDate, startDate) {
    var endArr = endDate.split('-');
    var startArr = startDate.split('-');
    if (!endArr || !endArr.length || !startArr || !startArr.length) {
        return null;
    }
    var offset = (endArr[0] - startArr[0]) * 12 + (endArr[1] - startArr[1]);
    if (endArr[2] - startArr[2] < 0) {
        offset -= 1;
    }
    return offset;
}

function formatDate(date, returnType, fixOffset) {
    date = date || new Date();
    if (fixOffset) {
        //For the real date
        if (offset)
            date = new Date(date.getTime() - offset);
        //Set timezone for china.
        var zone = -date.getTimezoneOffset() / 60;
        if (zone != 8)
            date = new Date(date.getTime() + (8 - zone) * 60 * 60 * 1000);
    }
    if (returnType == "date") {
        return date;
    }
    var month = date.getMonth() + 1,
        year = date.getFullYear(),
        day = date.getDate(),
        week = date.getDay(),
        ar = [year, pad(month), pad(day)],
        str = ar.join("-");

    if (!returnType)
        return str;

    var str1 = ar.join("");

    if (returnType == "humanize") {
        var sub = " 周" + weeks[week];
        var today = new Date();
        if (year == today.getFullYear() && month == (today.getMonth() + 1) && day == today.getDate()) {
            sub = " 今天";
        }
        var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        if (year == tomorrow.getFullYear() && month == (tomorrow.getMonth() + 1) && day == tomorrow.getDate()) {
            sub = " 明天";
        }
        return (month + "月" + day + "日" + sub);
    }
    if (returnType == "humanizeFull") {
        var sub = " 周" + weeks[week];
        var today = new Date();
        if (year == today.getFullYear() && month == (today.getMonth() + 1) && day == today.getDate()) {
            sub = " 今天";
        }
        var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        if (year == tomorrow.getFullYear() && month == (tomorrow.getMonth() + 1) && day == tomorrow.getDate()) {
            sub = " 明天";
        }
        return (year + "年" + month + "月" + day + "日" + sub);
    }

    if (returnType == "weekday") {
        var sub = " 周" + weeks[week];
        var today = new Date();
        if (year == today.getFullYear() && month == (today.getMonth() + 1) && day == today.getDate()) {
            sub = " 今天";
        }
        var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        if (year == tomorrow.getFullYear() && month == (tomorrow.getMonth() + 1) && day == tomorrow.getDate()) {
            sub = " 明天";
        }
        return {
            day: month + "月" + day + "日",
            weekday: sub,
        }
    }

    if (returnType == "dayWeekDayHourMinite") {
        var sub = " 周" + weeks[week];
        var today = new Date();
        if (year == today.getFullYear() && month == (today.getMonth() + 1) && day == today.getDate()) {
            sub = " 今天";
        }
        var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        if (year == tomorrow.getFullYear() && month == (tomorrow.getMonth() + 1) && day == tomorrow.getDate()) {
            sub = " 明天";
        }
        return {
            day: pad(month) + "-" + pad(day),
            weekday: sub,
            hour: pad(date.getHours()) + ":" + pad(date.getMinutes()),
        }
    }

    //05-30
    if (returnType == "Month-Day") {
        return month + "-" + day;
    }

    if (returnType == "Year-Month-Day") {
        return year + "-" + month + "-" + day;
    }

    if (returnType == "tight") {
        return str1;
    }


    var hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    if (returnType == "tightFull") {
        return str1 + pad(hour) + pad(min) + pad(sec);
    }

    if (returnType == "hour") {
        return pad(hour);
    }

    if (returnType == "time") {
        return pad(hour) + ":" + pad(min) + ":" + pad(sec);
    }

    if (returnType == "datetime") {
        return str + " " + pad(hour) + ":" + pad(min) + ":" + pad(sec);
    }

    //19:00
    if (returnType == "hour:sec") {
        return pad(hour) + ":" + pad(min);
    }

    if (returnType == "typeDictionary") {
        var sub = " 周" + weeks[week];
        var today = new Date();
        if (year == today.getFullYear() && month == (today.getMonth() + 1) && day == today.getDate()) {
            sub = " 今天";
        }
        var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        if (year == tomorrow.getFullYear() && month == (tomorrow.getMonth() + 1) && day == tomorrow.getDate()) {
            sub = " 明天";
        }
        var monthDay = month + "月" + day + "日",
            yearMonthDay = year + "年" + monthDay,
            dateShort = month + "-" + day,
            dateShort1 = month + "/" + day,
            dateShort2 = pad(month) + "-" + pad(day),
            str2 = ar.join("/"),
            shortTightTime = pad(hour) + pad(min),
            tightTime = shortTightTime + pad(sec),
            shortTime = pad(hour) + ":" + pad(min),
            time = shortTime + ":" + pad(sec);
        return {
            monthDay: monthDay, // MM月dd日
            yearMonthDay: yearMonthDay, // yyyy年MM月dd日
            weekday: sub, // 今天/明天/周x
            dateStr: str, // yyyy-MM-dd
            dateStr1: str2, // yyyy/MM/dd
            dateShort: dateShort, // MM-dd
            dateShort1: dateShort1, // MM/dd
            dateShort2: dateShort2, // MM-dd  补零
            tightDate: str1, // yyyyMMdd
            shortTightTime: shortTightTime, // hhmm
            tightTime: tightTime, // hhmmss
            shortTime: shortTime, // hh:mm
            time: time // hh:mm:ss
        }
    }

    return str;
}