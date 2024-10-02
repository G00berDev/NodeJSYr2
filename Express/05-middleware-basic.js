const express = require('express')
const app = express()
const logger = require('./middleware/logger')

app.get('/', logger, (req,res,next)=>{
    res.send('I JUST LOST MY DOG')
})

app.listen(5000,()=>{
    console.log('http://localhost:5000')
})