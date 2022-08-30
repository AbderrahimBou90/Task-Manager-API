// ––––––––––––––––– what about going to do ––––––––––––––––––
// check username and password in post(login) request 
// if both of them exist we create new JWT, if not we send back error respons
// fi we create JWT then of course we want to send it back to front-end 
// send back to front-end 

// setup authontication so only the request with JWT can access the dashboard 
// const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const login = async (req,res)=>{
 const {username, password} = req.body
 // we check username and password either by:
 // mongoose validation 
 // Joi package 
 // in our case check in controller
 if (!username || !password){
  // we throw an error 
  throw new CustomAPIError('Please provide email and password',400)
 }


 

const dashboard = async (req,res) =>{
 const luckyNumber = Math.floor(Math.random() * 100)
 res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {login,dashboard}