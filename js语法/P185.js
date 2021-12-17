/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-26 21:08:52
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-26 21:16:08
 */
let str = "改革春风吹满地";
console.log(str.substr(2, 2));

// 字符替换
let str2 = "asdahfsdjhiosadsa";
while (str2.indexOf('a') !== -1) {
    str2 = str2.replace('a', '*');
}

console.log(str2);