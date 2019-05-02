var obj = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
})


// 确保遍历的是自身的属性
for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
        continue
    }
}
