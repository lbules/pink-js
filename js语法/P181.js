/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-25 21:33:10
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-25 22:17:24
 */

/**
 * @description: 
 * @param {*} str 字符串
 * @param {*} target 目标字符
 * @return {*} 目标字符出现的位置和次数
 */
function getCharAt(str,target) {
    let result = [];
    let location = str.indexOf(target);
    while(location!==-1) {
        result.push(location);  // 保存目标字符串的索引值
        location = str.indexOf(target,location+1) // 继续查找目标字符
    }
    return result;  // 返回结果
}

let str = 'abcoxcaspcooasoebfdopvfdo';
const res = getCharAt(str,'o');
console.log(res,res.length);

let str1 = 'andy';
let index = str1.charAt(0);
console.log(index);
console.log(str[0]);