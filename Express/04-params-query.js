const express = require('express')
const app = express()
const { products } = require('./db/data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

// Return all products with selective fields
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, age } = product
        return { id, name, age }
    })
    res.json(newProducts)
})

// Route for individual product details with query parameters
app.get('/api/products/:productID', (req, res) => {
    console.log(req.query)
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product not found/Item does not exist')
    } else if (req.query.life == "42") {
        return res.status(202).send("You have found the easter egg")
    }

    return res.json(singleProduct)
})

// Route for product reviews based on productID and reviewID
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    const { productID, reviewID } = req.params
    res.send(`This product (ID: ${productID}) has been reviewed (Review ID: ${reviewID}): it's the worst product I have ever seen.`)
})

// Query products with search and limit functionality
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
})

// Server setup
app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})
