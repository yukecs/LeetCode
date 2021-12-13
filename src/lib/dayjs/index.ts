import dayjs,{ConfigType} from "dayjs";

/**
 * 通过dayjs返回YYYY-MM-DD的日期
 * @param date dayjs构造器参数或无参，无参代表今天
 * @returns YYYY-MM-DD格式的日期
 */
export function YYYYMMDD(date?:ConfigType) {
    return dayjs(date).format("YYYY-MM-DD");
}
/**
 * 获取两个日期之间相差的天数
 * @param prevDate 当前的日期
 * @param date 之前日期
 * @returns 
 */
export function getDaysBetween(prevDate:ConfigType,date:ConfigType){
    return (dayjs(prevDate).diff(date,'day'))
}
