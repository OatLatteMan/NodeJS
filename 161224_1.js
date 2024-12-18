const fs = require('fs')

let result = fs.readFileSync('some.txt', 'utf-8')
console.log(result)

fs.writeFileSync('some.txt', result + '\nHello, NodeJS!')