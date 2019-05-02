// base64 转换
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"

// 注意，这两个方法不适合非 ASCII 码的字符，会报错
// btoa("中文") // 报错


// 要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。
function b64Encode(str) {
    return btoa(encodeURIComponent(str))
}

function b64Decode(str) {
    return decodeURIComponent(atob(str))
}

b64Encode("你好")
b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE")
