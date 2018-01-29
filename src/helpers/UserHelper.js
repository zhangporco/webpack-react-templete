import { TimeUtil } from './TimeUtil';
import { Validate } from './Validates';
/**
 *
 */
export class UserHelper {
    /**
     * 通过身份证获取出生日期
     */
    static getBirthdayByIdCard(idCard){
        if (!Validate.idCard(idCard)) {
            return undefined;
        }
        const birthdayStr = idCard.substring(6, 10)+ idCard.substring(10, 12) +idCard.substring(12, 14) ;
        return TimeUtil.parseInt2Date(parseInt(birthdayStr));
    }

    /**
     * 取得年龄
     */
    static getAge(idCard){
        if (Validate.idCard(idCard)) {
            //获取年龄
            const myDate = new Date(); // todo 时间用服务器时间
            const month = myDate.getMonth() + 1;
            const day = myDate.getDate();
            let age = myDate.getFullYear() - idCard.substring(6, 10) - 1;
            if (idCard.substring(10, 12) < month || idCard.substring(10, 12) == month && idCard.substring(12, 14) <= day) {
                age++;
            }
            return age;
        }
        return '';
    }
}
