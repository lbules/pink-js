/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-19 16:11:54
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-19 21:09:24
 */
/* var num = 10;
fun(); // undefined
function fun() {
    console.log(num);
    var num = 20;
    console.log(num);
}

var a = 18;
f1();
 */
/* function f1() {
    var b = 9;
    console.log(a);  //undefined
    console.log(b);  // 9
    var a = '123';
} */

f1();
console.log(c);  // 9
console.log(b);  // 9
console.log(a);  //a is not defined

function f1() {
    var a = b = c =9;
    console.log(a);  // 9
    console.log(b);  // 9
    console.log(c);  //9
}
