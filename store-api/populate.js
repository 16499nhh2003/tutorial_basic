require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products')
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        console.log(jsonProducts);
        await Product.create(jsonProducts)
        console.log("Success")
        process.exit(0)
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

start();