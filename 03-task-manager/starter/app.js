// set up the most basic express server 

const experss = require('express')
const app = experss()

const task = require('./routes/tasks')


app.use(experss.json())

app.get('/hello',(req,res)=>{
 res.send('Task Manager App')
})

app.use('/api/v1/tasks',task)



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