/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-19 10:09:24
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-19 10:39:43
 */


function fn() {
    console.log(arguments);
}

fn(1, 2, 3)


/**
 * @description: 求任意个数的最大值
 * @param {*}
 * @return {*} 最大值
 */
function getMax() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        max = arguments[i] > max ? arguments[i] : max;
    }
    return max;
}

let res = getMax(5, 3, 8, 10, 0);
console.log(res);


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let arr1 = [5,2,7,0,6,9,1];
console.log(arr1);
bubbleSort(arr1)
console.log(arr1);