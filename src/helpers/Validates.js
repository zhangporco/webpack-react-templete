
/**
 *表单注册验证
 */
export class Validate {

    static repStrLength(str, min, max) {
        const rep = new RegExp("^\\w{" + min +"," + max + "}$")
        return rep.test(str);
    }

    static isShort(str, min) {
        return str && str.length < min;
    }

    static isLong(str, max) {
        return str && str.length > max;
    }

    static username(name) {
        return this.checkUP(name, 4, 10);
    }
    static password(pwd) {
        return this.checkUP(pwd, 6, 20);
    }


    static idCard(idCard) {
        if (idCard.length < 18) { return false; }
        const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const validate = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        let sum = 0;
        for (let i = 0; i < idCard.length - 1; i++) {
            sum += Number(idCard.charAt(i) * weight[i]);
        }
        const mode = sum % 11;
        return validate[mode] === idCard.charAt(17);
    }
}