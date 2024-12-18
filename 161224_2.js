const fs = require('fs')

//fs.mkdirSync('text-files')

fs.mkdir('templates', () => {
    fs.writeFile('./templates/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`, () => {})
})

// fs.unlink('./text-files/some.txt', () => {
//     fs.rmdir('./text-files', () => {})
// })