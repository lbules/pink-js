/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-24 10:05:50
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-24 10:47:49
 */

/* let arr = [];
arr.push(1);
console.log(arr); // [1]
// 添加多个元素
arr.push(2, 3, 4);
console.log(arr); // [1,2,3,4]
// 在数组前面添加元素
arr.unshift(0);
console.log(arr);

arr = [4, 5, 6];

// 传入多个参数调用一次unshift
arr.unshift(1, 2, 3);
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr = [4, 5, 6];
// 传入一个参数调用多次unshift
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr); // [3, 2, 1, 4, 5, 6] */

/* let arr = [1,2,3];
arr.pop()
console.log(arr);  // [1,2]

// 数组为空时返回undefined
let arr2 = []
console.log(arr2.pop());  */

const arr = ['a','b','c'];
let firstElement = arr.shift();
console.log(arr);  // ['b', 'c']
console.log(firstElement);  // a