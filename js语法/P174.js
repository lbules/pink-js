/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-24 16:00:20
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-24 16:18:16
 */
let arr = ['a', 'b', 'c'];
console.log(arr); // ['a', 'b', 'c']
arr.reverse();
console.log(arr); // ['c', 'b', 'a']

let arr2 = [34, 82, 1, 6, 3];
console.log(arr2);
// 升序
arr2.sort(function (a, b) {
    return a - b;  // 反过来b-a就是降序
});
console.log(arr2); //[1, 4, 6, 8]