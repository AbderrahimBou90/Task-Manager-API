// set up the most basic express server 
const experss = require('express')
const app = experss()
// if you remember if we have a function in a module and we need to execute it, we only require (import) the module and the function execute right away 
// require('./db/connect')
const connectDB = require("./db/connect");
require('dotenv').config()

const task = require('./routes/tasks')
// import middleware if route not found 
const notFound = require('./middleware/not-found')

// middleware 
app.use(experss.json())
// setup static file (add Front-End)
app.use(experss.static('./public'))

// routes 
// app.get('/hello',(req,res)=>{
//  res.send('Task Manager App')
// })

app.use('/api/v1/tasks',task)

app.use(notFound)


// route structure and details

// app.get('/api/v1/tasks')        - get all the tasks 
// app.post('/api/v1/tasks')       - create new task 
// app.get('/api/v1/tasks/:id')    - get single task 
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task 


const port = 3000

const start = async ()=>{
 try {
  // we will just sping up the server if the connection to DB is successful meaining we await until connectDB() function connect then we will runing the server 
  await connectDB(process.env.MONGO_URI_CONNECTION_STRING)
  app.listen(port,()=>{
   console.log(`server listening or runing on port ${port}... `)
  })
 } catch (error) {
  console.log(error)
 }
}
start()
