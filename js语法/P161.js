/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-22 20:35:08
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-22 21:10:54
 */
// math数学对象
function getRandom(max) {
   const res =  Math.floor(Math.random() * max);
   console.log(res);
}

getRandom(3);
// getRandom(3);
// getRandom(3);


/**
 * @description: 返回两数之间的随机整数
 * @param {*} num1
 * @param {*} num2
 * @return {*}
 */
function getBettwonRandom(num1,num2) {
    let min = Math.ceil(num1);
    let max = Math.floor(num2);
    console.log(Math.floor(Math.random()*(max-min))+min);
}

getBettwonRandom(0,10);

function getOne() {
    const arr = ['zs','ls','ww','zl'];
    
    console.log(arr[Math.floor(Math.random()*4)]);
}

getOne();