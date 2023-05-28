const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API Listening on Port ${PORT}`)
})

app.get('/', (req , res) => {
    res.render('index')
})

module.exports = app