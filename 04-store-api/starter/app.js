// import .env 
require('dotenv').config()
// async errors in comming videos 


// setup express server 
const express = require('express')
const app = express()

// import connectDB 
const connectDB = require('./db/connect')
// import route 
const productsRouter = require('./routes/products')

// import middlewares
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware convert body to json and access it in req
app.use(express.json())


// we this route for testing purposes 
app.get('/',(req,res)=>{
 res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

// products route in comming videos 
// this path in use() method is the main path
app.use('/api/v1/products',productsRouter)


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000


const start = async ()=>{
 try {
  // connectDB
  await connectDB(process.env.MONGO_URI_STORE_API)
  app.listen(port,console.log(`server listening or running on port ${port}...`))
 } catch (error) {
  console.log(error)
 }
}

start()