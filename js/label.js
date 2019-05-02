top:
    for (var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if (i === 1 && j === 1) break top
            console.log('i=' + i + ', j=' + j)
        }
    }

foo: {
    console.log(1)
    break foo
    console.log('本行不会输出')
}

console.log(2)

top:
    for (var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if (i === 1 && j === 1) continue top
            console.log('i=' + i + ', j=' + j)
        }
    }
