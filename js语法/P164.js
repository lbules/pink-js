/*
 * @Description: 
 * @Author: Lars
 * @Date: 2021-11-23 13:21:55
 * @LastEditors: Lars
 * @LastEditTime: 2021-11-23 14:21:13
 */
// 格式化日期

// console.log(date.getFullYear());
// 返回周几
// console.log(date.getDay());
// 获取月份，月份是0~11，所以需要加上1
// console.log(date.getMonth()+1);

// 返回日期
/* console.log(date.getDate());
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let week = date.getDay();
let arr = ['日', '一', '二', '三', '四', '五', '六']
let time = `${year}年${month}月${day}日 星期${arr[week]}`;
console.log(time); */

function getTime() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let week = date.getDay();
    let arr = ['日', '一', '二', '三', '四', '五', '六']
    let h = date.getHours();
    h = h < 10 ? '0' + h : h;
    let m = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    let s = date.getSeconds();
    s = s < 10 ? '0' + s : s;

    let time = `${year}年${month}月${day}日 ${h}:${m}:${s} 星期${arr[week]}`;
    console.log(time);
}

getTime();