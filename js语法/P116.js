/* 任意两数之间的和 */
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== "number") {
        console.log("please input type of number");
        return;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}

// add(1, 100);

// add('1','100')

/* 求任意两个数的和 */
function addTwoNum(num1, num2) {
    return num1 + num2;
    // console.log("hello");
}

let res = addTwoNum(4, 3);
console.log(res);

let res2 = addTwoNum(3)
console.log(res2);

let res3 = addTwoNum(1, 2, 3);
console.log(res3);

/* 求任意两个数的最大值 */
function getMax(a, b) {
    return a > b ? a : b;
}

console.log(getMax(10, 20));

function sayHi() {
    return 1,2,3;
}

console.log(sayHi());  // 3