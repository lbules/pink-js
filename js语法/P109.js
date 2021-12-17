/*
 * @Author: your name
 * @Date: 2021-11-17 21:13:31
 * @LastEditTime: 2021-11-17 23:34:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端回炉重造\06-pink-js课程\P109.js
 */
let arr1 = ['red', 'green', 'blue', 'pink', 'purple'];

// 反转数组
function reverse(arr) {
    let newArr = new Array();
    let len = arr.length-1;
    for (let i = len; i >= 0; i--) {
        newArr[newArr.length] = arr[i]
    }

    return newArr
}

// 原地反转
function reverse2(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start!==end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(arr1);

let res = reverse(arr1)
let res2 = reverse2(arr1)

console.log(res);
console.log(arr1);