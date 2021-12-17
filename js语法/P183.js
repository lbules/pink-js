/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-25 22:21:56
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-26 21:05:10
 */

/**
 * @description: 判断一个字符串中出现最多次数的字符，并统计其次数
 * @param {*} str 字符串
 * @return {*} 
 */
function getMostChat(str) {
    const result = {};
    const count = {
        max:0,
        chat:''
    }
    for (let i = 0; i < str.length; i++) {
        // result没有字符属性
        if (!result[str[i]]) {
            result[str[i]] = 1;
        } else {
            result[str[i]]++;
        }
    }
    console.log(result);
    // 记录出现最多的字符串和次数
    for (const key in result) {
        if(result[key]>count.max) {
            count.max = result[key];
            count.chat = key;
        }
    }
    console.log(count);
    
    return count;
}

let str = 'abcoxcaspcooasoebfdopvfdo';
getMostChat(str);