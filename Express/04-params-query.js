//ITS TIME FOR NODEMON, POSTMAN and QUESRIES API'S
const express = require('express')
const app = express()
const {products} = require('./db/data')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

//return all products
app.get('/api/products',(req,res)=>{
    const newProducts = products.map(product =>{
        const {id,name,age} = product
        return {id,name,age}
    })
    res.json(newProducts)
})

//this is how you set up aprams for the query data
app.get('/api/products/:productID', (req,res)=>{
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product not found/Item does not exist')
    }
    return res.json(singleProduct)
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000...")
})