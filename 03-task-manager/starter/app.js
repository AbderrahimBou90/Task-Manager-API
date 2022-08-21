// set up the most basic express server 

const experss = require('express')
const app = experss()

// if you remember if we have a function in a module and we need to execute it, we only require (import) the module and the function execute right away 
require('./db/connect')

const task = require('./routes/tasks')

// middleware 
app.use(experss.json())

app.get('/hello',(req,res)=>{
 res.send('Task Manager App')
})

app.use('/api/v1/tasks',task)
app.use('/api/v1/tasks/:id',task)



// route structure and details

// app.get('/api/v1/tasks')        - get all the tasks 
// app.post('/api/v1/tasks')       - create new task 
// app.get('/api/v1/tasks/:id')    - get single task 
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task 



const port = 3000
app.listen(port,()=>{
 console.log(`server listening or runing on port ${port}... `)
})