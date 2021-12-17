/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-24 10:50:00
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-24 10:55:18
 */
let salary = [1500,1200,2000,2100,1800];

/**
 * @description:  删除数组中超过2000，剩余元素放新数组
 * @param {*} arr 数组
 * @return {*} 返回新数组
 */
function deleteExceed(arr) {
    let result = [];
    for(let i = 0;i<arr.length;i++) {
        if(arr[i]<2000) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(deleteExceed(salary));
