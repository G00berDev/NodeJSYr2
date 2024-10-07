const express = require('express')
const app = express()
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')

/*
req ==> middleware ==> respnse 
Order matters if your place the app.use after the home pathway get, then it wont run on the homepage get pathway since the response will end before the middleware has a chance to run*/

// if you have sever midware then you can call tehm in an array jere order matters
app.use(logger)
app.get('/', (req,res,next)=>{
    res.send('GET OUT')
})
app.get('/about', (req,res,next)=>{
    res.send('About')
})

app.use('/api', [logger,authorize])

app.get("/api/products", (req,res)=>{
    res.send("products")
})

app.get("/api/items", (req,res)=>{
    console.log(res.user)
    res.send("items")
})

app.listen(5000, ()=>{
    console.log('http://localhost:5000')
})