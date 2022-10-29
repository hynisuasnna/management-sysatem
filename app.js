const express = require('express')
const mongoose = require ('mongoose')
const url = 'mongodb://localhost:3000/book'

const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open',() =>{
    console. log ('connected...')
})
 app.use (express.json())
const bookRouter = require('./routes/book')
app.use('/book',bookRouter)

app.listen(3000,() =>{
    console.log('server startted')
})
