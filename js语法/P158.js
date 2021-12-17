/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-22 16:06:20
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-22 16:18:09
 */
console.log(Math.PI);  // 属性
console.log(Math.max(1,3,9));  // 方法

const myMath = {
    PI:3.141592653,
    max:function(arr) {
        return Math.max.apply(null,arr)
    },
    min:function(arr) {
        return Math.min.apply(null,arr)
    }
}

const arr = [1,3,9,12];
const res1 = myMath.max(arr);
const res2 = myMath.min(arr);

console.log(`max is ${res1}, and min is ${res2}`);