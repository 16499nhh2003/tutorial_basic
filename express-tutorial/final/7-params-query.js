const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page <a href="/api/product">List Product</a></h1>')
})

app.get('/api/product', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name } = product
        return { id, name }
    })
    res.json(newProducts)
})

app.get('/api/product/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id === Number(id))
    if (!product) {
        return res.status(404).send("Not found product")
    }
    res.json(product)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...products]
    if (search) {
        sortedProduct = sortedProduct.filter(product => product.name.startsWith(search))
    }
    if (sortedProduct.length < 1) {
        return res.status(200).json({
            message: true,
            data: []
        })
    }
    return res.json(sortedProduct)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})