/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-20 11:05:39
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-20 11:06:42
 */
function Person(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const myself = new Person('lss',23,'famle');

console.log(typeof myself);
console.log(myself.name);
