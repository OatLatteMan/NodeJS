const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/oatlatteman', (req, res) => {
    res.send('This is actual page of my GitHub')
})

app.get('/user/:username/:id', (req, res) => {
    res.send(`ID: ${req.params.id}. Username: ${req.params.username}`)
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Server is started: http://localhost:${PORT}`)
})