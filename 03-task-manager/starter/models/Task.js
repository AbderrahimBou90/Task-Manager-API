// setup a structure for future document (future data) and assign them to the collection by using schema and model from the mongoose.
 // the reason for setup a sturcture for future document is in atlas (mongoDB) because there is no set structure in DB
 // Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.




const mongoose = require('mongoose')

// setup schema  (structure for the data) 
const TaskSchema = new mongoose.Schema({
 name:{
  type:String,
  required: [true,'must provide name'],
  // trim allows us don't have any white space in name 
  trim: true ,
  maxlength:[20,'name can not be more than 20 characters']
 },
 completed:{
  type:Boolean, 
  default:false
 }
})


// think of model as a representation for the collection.
// a mongoose model provides an interface to database, so using the model will be able to create update query and delete our docment 
// setup model and exprot it 
// model looking for two things the name and pass in the schema
module.exports = mongoose.model('Task',TaskSchema)