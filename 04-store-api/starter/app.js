// import .env 
require('dotenv').config()
// async errors in comming videos 


// setup express server 
const express = require('express')
const app = express()

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


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000


const start = async ()=>{
 try {
  // connectDB
  app.listen(port,console.log(`server listening or running on port ${port}...`))
 } catch (error) {
  console.log(error)
 }
}

start()