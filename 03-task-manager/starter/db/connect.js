const mongoose = require('mongoose')


const connectionString =
  "mongodb+srv://jakie:MongoDB2022@nodeexpressproject-task.5e5j7pn.mongodb.net/03-TASK-MANGER?retryWrites=true&w=majority";


 // connect() method return a promise 
// mongoose.connect(connectionString).then(()=>console.log('CONNECTED TO DB...')).catch((err)=>console.log(err))


// we try to connect to data base first then we sping up the server (we refactor the code a bit)
const connectDB = (url)=>{
return mongoose.connect(connectionString);
}

module.exports = connectDB
