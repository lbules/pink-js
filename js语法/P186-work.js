/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-26 21:30:33
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-26 21:48:17
 */
let str = "abaasdffggghhhjjkkgfddsssss3444343";

// 1.字符串的长度
const strLength= str.length;
console.log(strLength);

// 2. 取出指定字符的位置
/**
 * @description: 取出指定字符的位置
 * @param {*} str 原字符串
 * @param {*} target 目标字符
 * @return {*} 位置
 */
function getIndex(str,target) {
    const strIndex = [];
    let index = str.indexOf(target);
    while(index !==-1) {
        strIndex.push(index);
        index = str.indexOf(target,index+1);
    }

    return strIndex;
}
const strIndex = getIndex(str,'4');
console.log(strIndex);

// 3. 查找指定字符是否存在于字符串中
function isExist(str,target) {
    return str.includes(target);
}
console.log(isExist(str,9));
console.log(isExist(str,4));

// 4. 替换指定的字符
function repalceChat(str,chat,target) {
    while(str.includes(chat)) {
        str = str.replace(chat,target)
    }
    return str;
}
console.log(repalceChat(str,'g','22'));

// 5. 截取指定开始位置到结束位置的字符串
let newStr = str.substr(1,5)
console.log(newStr);