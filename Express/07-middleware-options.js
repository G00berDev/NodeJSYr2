const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.static('./public'))

app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send("welcome home sir")
})
app.get('/about',(req,res)=>{
    res.send('about you: still a sir')
})
app.get('/api/products', (req,res)=>{
    res.send('still a sit')
})
app.get('/api/items', (req,res)=>{
    res.send('sir')
})
app.get('*',(req,res)=>{
    res.end("404 - try again")
})
app.listen(5000, ()=>{
    console.log('http://localhost:5000')
})