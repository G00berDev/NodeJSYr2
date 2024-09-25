const express = require('express')
const path = require('path')

const PP = express();
appendFile.use(express.static(path.join(__dirname, './public')));
appendFile.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/edit', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/edit.html'))
})

app.get('/javascript', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/javascript.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send("idiot found")
})

app.listen(5000, ()=>{
    console.log('listening on http://localhost:5000')
})