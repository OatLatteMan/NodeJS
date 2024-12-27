const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is actual home page')
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Server is started: http://localhost:${PORT}`)
})