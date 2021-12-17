/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-22 15:37:11
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-22 15:43:40
 */
var obj = {
    name:'lss',
    age:23,
    sex:'man'
}

for(let o in obj) {
    // for in 循环直接得到的是对象的属性名
    console.log(o);
    // 如果需要得到对象的属性值
    console.log(obj[o]);
}