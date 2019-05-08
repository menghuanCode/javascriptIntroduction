function f() {
    return arguments.length
}

// 闭包
function createIncrementor(start) {
    return function () {
        return start++
    }
}

var inc = createIncrementor(5)

function Person(name) {
    var _age
    function setAge(n) {
        _age = n
    }

    function getAge() {
        return _age
    }

    return {
        name,
        getAge,
        setAge
    }
}

var p1 = Person('123')
p1.setAge(21)
p1.getAge()


// 立即执行函数 IIFE
var i = function () {
    return 10
}()

true && function () {
   console.log(10)
}()

0, function () {
    console.log(20)
}()

!function () { console.log(10) }();
~function () { console.log(10) }();
-function () { console.log(10) }();
+function () { console.log(10) }();

/**
 * 数组
 */

var arr = []
arr[-1] = 'a'
arr[Math.pow(2, 32)] = 'b'

// 4.  in 运算符
var arr = ['a', 'b', 'c']

// 5. for...in 循环和数组的遍历
// for...in 循环不仅可以遍历对象，也可以遍历数组，毕竟数组也是一种特殊对象
// Array.prototype.forEach 也可以用来进行循环

// 6. 数组的空位
// 数组的空位 和 undefined 是不一样的
// 如果是空位，使 Array.prototype.forEach 方法，for...in 结构，Object.keys 方法进行遍历，空位都会被跳过
// 就是说，空位就是数组没有这个元素，所以不会遍历到，而 undefined 则表示数组有这个元素，值是undefined，所以遍历不会跳过

// 7. 类似数组的对象
// 类数组的根本特征：就是具有 length 属性。
// 只要具有 length 属性，就可以认为这个对象类似于数组

// forEach 方法
function logArgs() {
    Array.prototype.forEach.call(arguments, function (elem, i) {
        console.log(i + '.' + elem)
    })
}

// 等同于 for 循环
function logArgs() {
    for(var i = 0; i < arguments.length; i++) {
        console.log(i + '.' + arguments[i])
    }
}

// 字符串也是类似数组的对象，所以也可以用 Array.prototype.forEach.call 遍历
Array.prototype.forEach.call('abc', function (chr) {
    console.log(chr);
});
// a
// b
// c

// 注意，这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。
var arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr) {
    console.log(chr);
});
// a
// b
// c


// 二进制运算符
var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16) // 先转成十六进制，然后返回字符串
        .substr(1);   // 去除字符串的最高位，返回后面六个字符串
}

// 数据类型转换

// 3. 自定义错误类型
function UserError(message) {
    this.message = message || '默认消息'
    this.name = 'UserError'
}

UserError.prototype = new Error()
UserError.prototype.constructor = UserError

// var x = -1
// if (x <= 0) {
//     throw new UserError('出错了！')
// }
//
// console.log(2)

try {
    console.log(1)
    throw new Error('测试错误')
} catch (e) {
    console.log(e.name + ": " + e.message)
    console.log(e.stack)
}

try {
    throw "出错了"
} catch (e) {
    console.log(111)
}

console.log(222)

// var n = 100
// try {
//     throw n
// } catch (e) {
//     if (e <= 50) {
//
//     } else {
//         throw e
//     }
// }

// try {
//     foo.bar()
// } catch (e) {
//     console.log(e)
//     if (e instanceof EvalError) {
//         console.log(e.name + ": " + e.message)
//     } else if(e instanceof RangeError) {
//         console.log(e.name + ": " + e.message)
//     }
// }
//

function cleansUp() {
    try {
        throw new Error('出錯了......')
        console.log('此行不会执行')
    } finally {
        console.log('完成清理工作')
    }
}

// cleansUp()

function idle(x) {
    try {
        console.log(x)
        return 'result'
    } finally {
        console.log('FINALLY')
    }
}

// idle('hello')

var count = 0
function countUp() {
    try {
        return count
    } finally {
        count++
    }
}

/*
// finally 代码块的经典用法
openFile()

try {
    wirteFile(Data)
} catch(e) {
    handleError(e)
} finally {
    closeFile()
}
*/


function f() {
    try {
        console.log(0)
        throw 'bug'
    } catch (e) {
        console.log(1)
        return true // 这句原本会延迟到 finally 代码块结束再执行
        console.log(2) // 不会运行
    } finally {
        console.log(3)
        return false // 这句会覆盖掉前面那句 return
        console.log(4)
    }

    console.log(5)
}

var result = f()

console.log(result)

function f1() {
    try {
        throw "出错了！"
    } catch(e) {
        console.log('捕获到内部错误')
        throw e
    } finally {
    }
}

try {
    f1()
} catch (e) {
    // 此处不执行
    console.log('caught outer bogus')
}

// try {
//     try {
//         conole.log('Hello world!')
//     }
//     finally {
//         console.log('Finally')
//     }
//     console.log('Will I run?')
// } catch (error) {
//     console.log(error.message)
// }


function doAction(action) {
    var actions = {
        'hack': function () {
            return 'hack'
        },
        'slash': function () {
            return 'salsh'
        },
        'run': function () {
            return 'run'
        }
    }

    if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action.')
    }

    return actions[action]()
}


function isObject(value) {
    return value === Object(value)
}

var obj = {
    p1: 123,
    P2: 456
}

Object.key(obj)
Object.getOwnPropertyNames(obj)
