
var number = 11 * 9
var color  = 'red'

console.log('%d %s balloons', number, color)

console.log('%cThis text is styled!', 'color: red; background: yellow; font-size: 24px')
console.log(' %s + %s', 1, 1, '= 2');


['log', 'info', 'warn', 'error'].forEach(function (method) {
    console[method] = console[method].bind(console, new Date().toISOString() )
})

var languages = [
    { name: "JavaScript", fileExtension: '.js' },
    { name: "TypeScript", fileExtension: '.ts' },
    { name: "CoffeeScript", fileExtension: '.coffee' }
]

console.table(languages)

var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
}

console.table(languages)

function greet(user) {
    console.count()
    return 'hi ' + user
}

function greet(user) {
    console.count(user)
    return 'hi ' + user
}

console.dir({f1: 'foo', f2: 'bar'})

// console.time('Array initialize')
// var array = new Array(10000000)
// for(let i = array.length - 1; i >= 0; i--) {
//     array[i] = new Object()
// }
// console.timeEnd('Array initialize')

console.group('一级分组')
console.log('一级分组内容')

console.group('二级分组')
console.log('二级分组内容')

console.groupEnd()
console.groupEnd()

console.groupCollapsed('Fetching Data')

console.log('Request Sent')
console.error('Error: Server not responding (500)')

console.groupEnd()


console.trace()
// console.clear()