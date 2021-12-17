/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-24 16:37:37
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-24 16:54:44
 */

/**
 * @description: 去除数组中的重复元素
 * @param {*} arr
 * @return {*}
 */
function removeRepetition(arr) {
    let result = [];
    for(let i =0;i<arr.length;i++) {
        if(result.indexOf(arr[i])===-1){
            result.push(arr[i])
        }
    }
    return result;
}   

let arr = ['c','a','z','a','x','a','x','c','b'];
let res = removeRepetition(arr);
console.log(res);