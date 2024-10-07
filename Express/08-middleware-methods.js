const express = require('express')
const app = express()
let {people} = require('./db/data')

app.use(express.static('./public'))
app.use(express.urlencoded ({extend:false}))

app.use(express.json())
app.get('/api/people', (req,res)=>{
    res.json({success: true, data:name})
})

app.post('/api/people', (req,res)=>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success:true, data:name})
    }
    return res.status(404).json({success:false, msg:"please provide a name"})
})

app.post('/login', (req,res)=>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success:true})
    }
    res.send('please provide credentials')
})