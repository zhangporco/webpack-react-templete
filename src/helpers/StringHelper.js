class StringHelper {
    static level(level) {
        if (level === 0) {
            return '　';
        }
        let str = '　';
        for (let i = 0; i < level - 1; i++) {
            str += '　';
        }
        return `${str}┗  `;
    }
    static random(len) {
        let s = '';
        while (s.length < len) {
            const r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return s;
    }

    /**
     * 生成n位的纯数字字符串
     * @param len
     * @returns {string}
     */
    static randomNumStr(len) {
        let s = '';
        while (s.length < len) {
            const num = Math.floor(Math.random() * 10);
            s += num;
        }
        return s;
    }

    /**
     * 敏感序列的'*'
     * 13263130192 --> 132***192
     */
    static hide(str) {
        if (!str) {
            return '';
        }
        const len = str.length;
        let finalStr = '';
        if (len > 8) {
            const preStr = str.substr(0, len - 8);
            const sufStr = str.substring(len - 4, len);
            finalStr = `${preStr}****${sufStr}`;
        }
        return finalStr;
    }

    static format(content, dataJson) {
        if (!dataJson || dataJson.length === 0) {
            return content;
        }
        let contentResult = content;
        for (const key of Object.keys(dataJson)) {
            contentResult = contentResult.replace(new RegExp(`\\{${key}\\}`, 'g'), dataJson[key]);
        }
        return contentResult;
    }

    /**
     * @test ok
     * @param str
     * @param min
     * @param max
     * @returns {boolean}
     */
    static checkLength(str, min, max) {
        const length = str.length;
        return str && length <= max && length >=min ? true :false;
    }

    /**
     * string to ascii
     * @param str
     * @param excision 分隔符
     * @returns {string}
     */
    static stringToAscII(str, excision) {
        let res = '';
        excision = excision ? excision : ' ';
        for (let i = 0; i < str.length; i++) {
            res += str.charAt(i).charCodeAt();
            if (i < str.length - 1 && excision) {
                res += excision;
            }
        }
        return res;
    }

    /**
     * ascii to string
     * @param ascii
     * @param excision 分隔符
     * @returns {string}
     * @constructor
     */
    static AsciiToString(ascii, excision) {
        excision = excision ? excision : ' ';
        const array  = ascii.split(excision);
        let res = '';
        for (const val of array) {
            res += String.fromCharCode(val);
        }
        return res;
    }
}

export default StringHelper;

export { StringHelper };
