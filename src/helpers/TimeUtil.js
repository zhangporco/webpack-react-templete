/**
 * @author Porco
 * 时间处理函数
 */
export class TimeUtil {

    static dateFormats(time, tag) {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const week = date.getDay();
        const weekArray = ['日', '一', '二', '三', '四', '五', '六'];
        const weekDay = weekArray[week];
        if (tag === undefined) { tag = '-'; }
        switch (tag) {
            case '-':
                return (`${year}-${month}-${day}(${weekDay})`);
            case '/':
                return (`${year}/${month}/${day}(${weekDay})`);
            default:
                return undefined;
        }
    }

    static dayFormats(time, tag) {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
        if (tag === undefined) { tag = '-'; }
        switch (tag) {
            case '-':
                return (`${year}-${month}-${day}`);
            case '/':
                return (`${year}/${month}/${day}`);
            case ' ':
                return (`${year}${month}${day}`);
            default:
                return undefined;
        }
    }

    static dateToYMD(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    }

    /**
     * 2017-5-9 10:00:00 to date
     */
    static stringToDate(string) {
        return new Date(Date.parse(string.replace(/-/g, '/')));
    }

    /**
     * 格式化为几月几日
     */
    formatToMonthAndDay(time) {
        const date = new Date(time);
        const month = date.getMonth() < 9 ? `${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() <= 9 ? `${date.getDate()}` : date.getDate();
        return (`${month}月${day}日`);
    }

    /**
     * 2016/9/19 14:25:00
     */
    formatToSecond(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const second = date.getSeconds();
        return (`${year}/${month}/${day} ${hour}:${min}:${second}`);
    }

    /**
     * 计算两个时间的时差（秒）
     * beginTime 开始时间
     * endTime 结束时间
     */
    diffSecond(beginTime, endTime) {
        beginTime = new Date(beginTime);
        endTime = new Date(endTime);
        var diff = endTime.getTime() - beginTime.getTime();
        return parseInt(diff / 1000);
    }

    /**
     * 计算两个时间的天数差
     * beginTime    开始时间
     * endTime      结束时间
     */
    static diffDays(beginTime, endTime) {
        const diffMilliSeconds = endTime.getTime() - beginTime.getTime();
        return Math.abs(diffMilliSeconds / (24 * 60 * 60 * 1000));
    }

    /**
     * 日期转换成： yyyy-MM-dd (星期) hh:mm
     */
    static dateToYMDWHM(date, tag) {
        if (!date) {
            return '';
        }
        const time = new Date(date);
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const week = time.getDay();
        const hour = time.getHours();
        const min = time.getMinutes();
        const weekArray = ['日', '一', '二', '三', '四', '五', '六'];
        const weekDay = weekArray[week];
        switch(tag) {
            case '-':
                return (`${year}-${month}-${day} (${weekDay}) ${hour}:${min >= 10 ? min : `0${min}`}`);
            case '/':
                return (`${year}/${month}/${day} (${weekDay}) ${hour}:${min >= 10 ? min : `0${min}`}`);
            default:
                return (`${year}-${month}-${day} (${weekDay}) ${hour}:${min >= 10 ? min : `0${min}`}`);
        }
    }

    /**
     * 日期转换成： yyyy-MM-dd hh:mm
     */
    static dateToYMDHM(date, tag) {
        if (!date) {
            return '';
        }
        const time = new Date(date);
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const hour = time.getHours();
        const min = time.getMinutes();
        switch(tag) {
            case '-':
                return (`${year}-${month}-${day} ${hour}:${min >= 10 ? min : `0${min}`}`);
            case '/':
                return (`${year}/${month}/${day} ${hour}:${min >= 10 ? min : `0${min}`}`);
            default:
                return (`${year}-${month}-${day} ${hour}:${min >= 10 ? min : `0${min}`}`);
        }
    }

    /**
     * 获取前一天
     * @param date
     * @returns {*}
     */
    static getDayBefore(date) {
        const time = date.getTime() - 86400000;
        const d = new Date();
        d.setTime(time);
        return d;
    }

    /**
     * 获取一天的开始
     * @param date
     * @returns {*}
     */
    static getDayBegin(date) {
        const d = new Date();
        d.setTime(date.getTime());
        d.setHours(0, 0, 0, 0);
        return d;
    }

    /**
     * 获取一天的结束
     * @param date
     * @returns {*}
     */
    static getDayEnd(date) {
        const d = new Date();
        d.setTime(date.getTime());
        d.setHours(23, 59, 59, 999);
        return d;
    }

    /**
     * 比较两个日期，d1 > d2 返回 1， d1 < d2 返回 -1， 否则返回0
     * @param d1
     * @param d2
     * @returns {number}
     */
    static compare(d1, d2) {
        if (d1.getTime() > d2.getTime()) {
            return 1;
        }
        if (d1.getTime() < d2.getTime()) {
            return -1;
        }
        return 0;
    }

    /**
     * 判断当前时间是上午还是下午
     * @param date 指定时间，为空则取当前时间
     * return 上午：0，  下午：1
     */
    static getMorningOrAfternoon(date) {
        if (!date) {
            date = new Date();
        }
        if (date.getHours() < 12) {
            return 0;
        }
        return 1;
    }

    /**
     * 设置指定时间的相关field
     * @param date
     * @param hour
     * @param minute
     * @param second
     * @param milliSecond
     */
    static setDate(date, hour, minute, second, milliSecond) {
        if (!date) {
            date = new Date();
        }
        if (hour) {
            date.setHours(hour);
        }
        if (minute) {
            date.setMinutes(minute);
        }
        if (second) {
            date.setSeconds(second);
        }
        if (milliSecond) {
            date.setMilliseconds(milliSecond);
        }
        return date;
    }

    /**
     * 将日期数字格式转为Date类型
     *
     * @param dateInt   日期int格式(20161010)
     * @returns {Date}
     */
    static parseInt2Date(dateInt) {
        const dateStr = `${dateInt}`;
        const date =  new Date(dateStr.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3'));
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }

    static addMinutes(date, minutes) {
        if (!date) {
            date = new Date();
        }
        const dayLong = date.getTime() + minutes * TimeUtil.MINUTE_LONG;
        return new Date(dayLong);
    }

    static addHours(date, hours) {
        if (!date) {
            date = new Date();
        }
        const dayLong = date.getTime() + hours * TimeUtil.HOUR_LONG;
        return new Date(dayLong);
    }

    static addDay(date, day) {
        if (!date) {
            date = new Date();
        }
        const dayLong = date.getTime() + day * TimeUtil.DAY_LONG;
        return new Date(dayLong);
    }

}

TimeUtil.SECOND_LONG = 1000;
TimeUtil.MINUTE_LONG = 60 * TimeUtil.SECOND_LONG;
TimeUtil.HOUR_LONG = 60 * TimeUtil.MINUTE_LONG;
TimeUtil.DAY_HOUR = 24;
TimeUtil.DAY_LONG = TimeUtil.DAY_HOUR * TimeUtil.HOUR_LONG;
TimeUtil.WEEK_DAY = 7;
TimeUtil.MONTH_DAY = 30;
TimeUtil.MONTH_LONG = TimeUtil.MONTH_DAY * TimeUtil.DAY_LONG;
TimeUtil.YEAR_DAY = 365;
TimeUtil.YEAR_LONG = TimeUtil.YEAR_DAY * TimeUtil.DAY_LONG;
