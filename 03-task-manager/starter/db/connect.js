const mongoose = require('mongoose')





 // connect() method return a promise 
// mongoose.connect(connectionString).then(()=>console.log('CONNECTED TO DB...')).catch((err)=>console.log(err))


// we try to connect to data base first then we sping up the server (we refactor the code a bit)
const connectDB = (url)=>{
return mongoose.connect(url);
}

module.exports = connectDB
