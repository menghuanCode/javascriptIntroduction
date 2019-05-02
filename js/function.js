/*
// 函数声明提升
function f() {
    console.log(1)
}

f() // 2

function f() {
    console.log(2)
}

f() // 2
*/


// 斐波那数列
// function fib(num) {
//     if (num === 0) {return 0}
//     if (num === 1) {return 1}
//     return fib(num - 2) + fib(num - 1)
// }
//
// var f= function () {
//     console.log(1)
// }
//
// function f() {
//     console.log(2)
// }
//
// f()

// function f(a, b) {
//     console.log(arguments.length)
// }
//
// f(1, 2, 3)
//
// console.log(f.length)

function f() {
    a()
    b()
    c()
}

