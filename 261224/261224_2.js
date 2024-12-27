const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    res.render('user')
})

app.get('/oatlatteman', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/user/:username/:id', (req, res) => {
    res.send(`ID: ${req.params.id}. Username: ${req.params.username}`)
})

const PORT = 3000

app.listen(3000, () => {
    console.log(`Server is started: http://localhost:${PORT}`)
})