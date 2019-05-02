// 方法一
function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value)
}

// 方法二
function myIsNaN(value) {
    return value !== value
}
