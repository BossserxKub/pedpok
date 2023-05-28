const express = require('express')
const app = express()
const PORT = 4000
app.set("view engine", "ejs")
app.listen(PORT, () => {
    console.log(`API Listening on Port ${PORT}`)
})

app.get('/', (req , res) => {
    res.send('This is my API running')
})

app.get('/test', (req , res) => {
    res.send('test page')
})
module.exports = app