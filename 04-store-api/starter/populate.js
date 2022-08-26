// add products data to DB  (products.json)
// we setup populate.js where we'll dynamically add all data to DB

require('dotenv').config()

const connectDB = require('./db/connect')

const Product = require('./models/product')

const jsonProducts =  require('./products.json') 

// start function to simply connect to DB and use the model to automatically add those json products to database 
const start = async () => {
try {
 await connectDB(process.env.MONGO_URI_STORE_API)
 // i want to delete all the products that are currently there,
 // in our case there are no products, i'm just making sure later if you want to use it then whatever data you add, you just remove it and start from scratch (this optionally)
 await Product.deleteMany()
 // create data in database DB
 await Product.create(jsonProducts)
 console.log('Success')
 // we don't want the file to keep running for that we add exit() method with index 0 if all thing is going well and with 1 in there is an error 
 process.exit(0)
} catch (error) {
 console.log(error)
 process.exit(1)
}
}

start()