const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valide email",
    ],
    // creates unique index (technically is not a validator)
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    // we will remove maxlength later, once we hash our password
    // maxlength: 12,
  },
});

// ••••••••••••• hashing password by using pre middleware •••••••••••••••••••
// mongoose middleware, pre: meaning before we save our document we hash our password,and in callback function we can access properties in document and change what we wanna change in this case we hash password, we use middleware to prevent jamming code in controller 
UserSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next()
})


module.exports = mongoose.model('User',UserSchema)